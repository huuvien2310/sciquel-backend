const { gql } = require("apollo-server");

module.exports = gql`
  type Content {
    Content: Article!
  }

  type Tag {
    KeywordTags: [String]!
    FieldTags: [String]!
    SubFieldTags: [String]!
  }

  type QA {
    Question: String!
    Options: [String]!
    CorrectIndex: Int!
  }

  type Article {
    ArticleID: ID
    AuthorID: ID
    AuthorName: String!
    ArticleType: String
    ArticleTitle: String!
    ArticleContent: String
    PreviousVersions: [String]
    ArticleSummary: String
    LanguageOptions: [String]
    ArticleFormat: Int
    ArticleMedia: [Media]
    Tags: [Tag]
    CreatedDate: Date
    Section: String
    Published: Boolean
    PublishedDate: Date
    LastUpdated: Date
    Definitions: [Definitions]
    RelatedContent: [Content]
    Quiz: [QA]
  }

  type Definitions {
    Term: String!
    Definition: String!
    Context: String!
    ArticleID: String!
  }

  type Tag {
    id: ID!
  }

  type Media {
    id: ID!
  }

  type Users {
    UserID: ID!
    UserName: String!
    PasswordHash: String!
    UserEmail: String!
    UserPhoneNumber: String!
    Roles: [Boolean]!
    UserDescription: String!
    SocialMedia: [String]!
    UserImage: String!
    Tags: [String]!
    ArticleIDs: [String]!
    PodcastIDs: [String]!
    VideoIDs: [String]!
    JoinedDate: Date!
    PageBookmarks: [String]!
    TextBookmarks: [String]!
    ImageBookmarks: [String]!
    PreferredLanguages: [String]!
    PreferredSectionOrder: [String]!
  }

  type Date {
    Month: String!
    Day: String!
    Year: String!
  }

  type Subscriptions {
    Email: String!
  }

  type Query {
    users: [Users]!
    articles: [Article]!
    subscriptions: [Subscriptions]!
    definitions: [Definitions]!
    date: [Date]!
  }

  type Mutation {
    newUser(
      UserID: ID!
      UserName: String!
      PasswordHash: String!
      UserEmail: String
      UserPhoneNumber: String
      Roles: [Boolean]
      UserDescription: String
      SocialMedia: [String]
      UserImage: String
      Tags: [String]
      ArticleIDs: [String]
      PodcastIDs: [String]
      VideoIDs: [String]
      PageBookmarks: [String]
      TextBookmarks: [String]
      ImageBookmarks: [String]
      PreferredLanguages: [String]
      PreferredSectionOrder: [String]
    ): Users!
    newArticle(
      ArticleID: ID
      AuthorID: ID
      AuthorName: String!
      ArticleType: String
      ArticleTitle: String!
      ArticleContent: String
      PreviousVersions: [String]
      ArticleSummary: String
      LanguageOptions: [String]
      ArticleFormat: Int
      Section: String
      Published: Boolean
    ): Article!
    newSubscription(Email: String!): Subscriptions!
    newDefinition(
      Term: String!
      Definition: String!
      Context: String!
      ArticleID: String!
    ): Definitions!
  }
`;
