import { gql } from "@apollo/client";
import client, { Client } from "./fetcher";
import { Channel } from "../domain/Channel";
import { User } from "../domain/User";

const DocumentNodes = {
  fetchLatestMessages: gql`
    query latestMessages($channelId: ChannelId!) {
      MessagesFetchLatest(channelId: $channelId) {
        messageId
        text
        datetime
        userId
      }
    }
  `,
  fetchMoreMessages: gql`
    query moreMessages(
      $channelId: ChannelId!
      $messageId: String!
      $old: Boolean!
    ) {
      MessagesFetchMore(
        channelId: $channelId
        messageId: $messageId
        old: $old
      ) {
        messageId
        text
        datetime
        userId
      }
    }
  `,
  postMessage: gql`
    mutation message($channelId: ChannelId!, $text: String!, $userId: UserId!) {
      MessagePost(channelId: $channelId, text: $text, userId: $userId) {
        messageId
        text
        datetime
        userId
      }
    }
  `,
};

type MoreMessages = {
  channel: Channel;
  messageId: string;
  old: boolean;
};

type LatestMessages = {
  channel: Channel;
};

type PostMessage = {
  channel: Channel;
  text: string;
  user: User;
};

const fetchLatest =
  (client: Client) =>
  async ({ channel }: LatestMessages) => {
    const response = await client.query({
      query: DocumentNodes.fetchLatestMessages,
      variables: {
        channelId: channel,
      },
    });
    const data = response.data.MessagesFetchLatest;

    return data;
  };

const fetchMore =
  (client: Client) =>
  async ({ channel, messageId, old }: MoreMessages) => {
    const response = await client.query({
      query: DocumentNodes.fetchMoreMessages,
      variables: {
        channelId: channel,
        messageId: messageId,
        old: old,
      },
    });
    const data = response.data.MessagesFetchMore;

    return data;
  };

const post =
  (client: Client) =>
  async ({ channel, text, user }: PostMessage) => {
    const response = await client.mutate({
      mutation: DocumentNodes.postMessage,
      variables: {
        channelId: channel,
        text: text,
        userId: user,
      },
    });
    const data = response.data.MessagePost;

    return data;
  };

const makeMessageApi = (client: Client) => ({
  fetchLatest: fetchLatest(client),
  fetchMore: fetchMore(client),
  post: post(client),
});

export default makeMessageApi(client);
