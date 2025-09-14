
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model ArticleComment
 * 
 */
export type ArticleComment = $Result.DefaultSelection<Prisma.$ArticleCommentPayload>
/**
 * Model ArticleCommentLike
 * 
 */
export type ArticleCommentLike = $Result.DefaultSelection<Prisma.$ArticleCommentLikePayload>
/**
 * Model ArticleImage
 * 
 */
export type ArticleImage = $Result.DefaultSelection<Prisma.$ArticleImagePayload>
/**
 * Model ArticleLike
 * 
 */
export type ArticleLike = $Result.DefaultSelection<Prisma.$ArticleLikePayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventImage
 * 
 */
export type EventImage = $Result.DefaultSelection<Prisma.$EventImagePayload>
/**
 * Model EventScrap
 * 
 */
export type EventScrap = $Result.DefaultSelection<Prisma.$EventScrapPayload>
/**
 * Model Term
 * 
 */
export type Term = $Result.DefaultSelection<Prisma.$TermPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserTerm
 * 
 */
export type UserTerm = $Result.DefaultSelection<Prisma.$UserTermPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleComment`: Exposes CRUD operations for the **ArticleComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleComments
    * const articleComments = await prisma.articleComment.findMany()
    * ```
    */
  get articleComment(): Prisma.ArticleCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleCommentLike`: Exposes CRUD operations for the **ArticleCommentLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleCommentLikes
    * const articleCommentLikes = await prisma.articleCommentLike.findMany()
    * ```
    */
  get articleCommentLike(): Prisma.ArticleCommentLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleImage`: Exposes CRUD operations for the **ArticleImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleImages
    * const articleImages = await prisma.articleImage.findMany()
    * ```
    */
  get articleImage(): Prisma.ArticleImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleLike`: Exposes CRUD operations for the **ArticleLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleLikes
    * const articleLikes = await prisma.articleLike.findMany()
    * ```
    */
  get articleLike(): Prisma.ArticleLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventImage`: Exposes CRUD operations for the **EventImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventImages
    * const eventImages = await prisma.eventImage.findMany()
    * ```
    */
  get eventImage(): Prisma.EventImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventScrap`: Exposes CRUD operations for the **EventScrap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventScraps
    * const eventScraps = await prisma.eventScrap.findMany()
    * ```
    */
  get eventScrap(): Prisma.EventScrapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.term`: Exposes CRUD operations for the **Term** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terms
    * const terms = await prisma.term.findMany()
    * ```
    */
  get term(): Prisma.TermDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTerm`: Exposes CRUD operations for the **UserTerm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTerms
    * const userTerms = await prisma.userTerm.findMany()
    * ```
    */
  get userTerm(): Prisma.UserTermDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Article: 'Article',
    ArticleComment: 'ArticleComment',
    ArticleCommentLike: 'ArticleCommentLike',
    ArticleImage: 'ArticleImage',
    ArticleLike: 'ArticleLike',
    Community: 'Community',
    Event: 'Event',
    EventImage: 'EventImage',
    EventScrap: 'EventScrap',
    Term: 'Term',
    User: 'User',
    UserTerm: 'UserTerm'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "article" | "articleComment" | "articleCommentLike" | "articleImage" | "articleLike" | "community" | "event" | "eventImage" | "eventScrap" | "term" | "user" | "userTerm"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      ArticleComment: {
        payload: Prisma.$ArticleCommentPayload<ExtArgs>
        fields: Prisma.ArticleCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentPayload>
          }
          findFirst: {
            args: Prisma.ArticleCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentPayload>
          }
          findMany: {
            args: Prisma.ArticleCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentPayload>[]
          }
          create: {
            args: Prisma.ArticleCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentPayload>
          }
          createMany: {
            args: Prisma.ArticleCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentPayload>
          }
          update: {
            args: Prisma.ArticleCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentPayload>
          }
          deleteMany: {
            args: Prisma.ArticleCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentPayload>
          }
          aggregate: {
            args: Prisma.ArticleCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleComment>
          }
          groupBy: {
            args: Prisma.ArticleCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCommentCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCommentCountAggregateOutputType> | number
          }
        }
      }
      ArticleCommentLike: {
        payload: Prisma.$ArticleCommentLikePayload<ExtArgs>
        fields: Prisma.ArticleCommentLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleCommentLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleCommentLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentLikePayload>
          }
          findFirst: {
            args: Prisma.ArticleCommentLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleCommentLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentLikePayload>
          }
          findMany: {
            args: Prisma.ArticleCommentLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentLikePayload>[]
          }
          create: {
            args: Prisma.ArticleCommentLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentLikePayload>
          }
          createMany: {
            args: Prisma.ArticleCommentLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleCommentLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentLikePayload>
          }
          update: {
            args: Prisma.ArticleCommentLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentLikePayload>
          }
          deleteMany: {
            args: Prisma.ArticleCommentLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleCommentLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleCommentLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleCommentLikePayload>
          }
          aggregate: {
            args: Prisma.ArticleCommentLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleCommentLike>
          }
          groupBy: {
            args: Prisma.ArticleCommentLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleCommentLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCommentLikeCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCommentLikeCountAggregateOutputType> | number
          }
        }
      }
      ArticleImage: {
        payload: Prisma.$ArticleImagePayload<ExtArgs>
        fields: Prisma.ArticleImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleImagePayload>
          }
          findFirst: {
            args: Prisma.ArticleImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleImagePayload>
          }
          findMany: {
            args: Prisma.ArticleImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleImagePayload>[]
          }
          create: {
            args: Prisma.ArticleImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleImagePayload>
          }
          createMany: {
            args: Prisma.ArticleImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleImagePayload>
          }
          update: {
            args: Prisma.ArticleImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleImagePayload>
          }
          deleteMany: {
            args: Prisma.ArticleImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleImagePayload>
          }
          aggregate: {
            args: Prisma.ArticleImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleImage>
          }
          groupBy: {
            args: Prisma.ArticleImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleImageCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleImageCountAggregateOutputType> | number
          }
        }
      }
      ArticleLike: {
        payload: Prisma.$ArticleLikePayload<ExtArgs>
        fields: Prisma.ArticleLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          findFirst: {
            args: Prisma.ArticleLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          findMany: {
            args: Prisma.ArticleLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>[]
          }
          create: {
            args: Prisma.ArticleLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          createMany: {
            args: Prisma.ArticleLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          update: {
            args: Prisma.ArticleLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          deleteMany: {
            args: Prisma.ArticleLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          aggregate: {
            args: Prisma.ArticleLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleLike>
          }
          groupBy: {
            args: Prisma.ArticleLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleLikeCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleLikeCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventImage: {
        payload: Prisma.$EventImagePayload<ExtArgs>
        fields: Prisma.EventImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          findFirst: {
            args: Prisma.EventImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          findMany: {
            args: Prisma.EventImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>[]
          }
          create: {
            args: Prisma.EventImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          createMany: {
            args: Prisma.EventImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          update: {
            args: Prisma.EventImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          deleteMany: {
            args: Prisma.EventImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          aggregate: {
            args: Prisma.EventImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventImage>
          }
          groupBy: {
            args: Prisma.EventImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventImageCountArgs<ExtArgs>
            result: $Utils.Optional<EventImageCountAggregateOutputType> | number
          }
        }
      }
      EventScrap: {
        payload: Prisma.$EventScrapPayload<ExtArgs>
        fields: Prisma.EventScrapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventScrapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScrapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventScrapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScrapPayload>
          }
          findFirst: {
            args: Prisma.EventScrapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScrapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventScrapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScrapPayload>
          }
          findMany: {
            args: Prisma.EventScrapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScrapPayload>[]
          }
          create: {
            args: Prisma.EventScrapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScrapPayload>
          }
          createMany: {
            args: Prisma.EventScrapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventScrapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScrapPayload>
          }
          update: {
            args: Prisma.EventScrapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScrapPayload>
          }
          deleteMany: {
            args: Prisma.EventScrapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventScrapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventScrapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScrapPayload>
          }
          aggregate: {
            args: Prisma.EventScrapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventScrap>
          }
          groupBy: {
            args: Prisma.EventScrapGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventScrapGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventScrapCountArgs<ExtArgs>
            result: $Utils.Optional<EventScrapCountAggregateOutputType> | number
          }
        }
      }
      Term: {
        payload: Prisma.$TermPayload<ExtArgs>
        fields: Prisma.TermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          findFirst: {
            args: Prisma.TermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          findMany: {
            args: Prisma.TermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>[]
          }
          create: {
            args: Prisma.TermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          createMany: {
            args: Prisma.TermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          update: {
            args: Prisma.TermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          deleteMany: {
            args: Prisma.TermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          aggregate: {
            args: Prisma.TermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerm>
          }
          groupBy: {
            args: Prisma.TermGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermCountArgs<ExtArgs>
            result: $Utils.Optional<TermCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserTerm: {
        payload: Prisma.$UserTermPayload<ExtArgs>
        fields: Prisma.UserTermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTermPayload>
          }
          findFirst: {
            args: Prisma.UserTermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTermPayload>
          }
          findMany: {
            args: Prisma.UserTermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTermPayload>[]
          }
          create: {
            args: Prisma.UserTermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTermPayload>
          }
          createMany: {
            args: Prisma.UserTermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserTermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTermPayload>
          }
          update: {
            args: Prisma.UserTermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTermPayload>
          }
          deleteMany: {
            args: Prisma.UserTermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserTermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTermPayload>
          }
          aggregate: {
            args: Prisma.UserTermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTerm>
          }
          groupBy: {
            args: Prisma.UserTermGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTermGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTermCountArgs<ExtArgs>
            result: $Utils.Optional<UserTermCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    article?: ArticleOmit
    articleComment?: ArticleCommentOmit
    articleCommentLike?: ArticleCommentLikeOmit
    articleImage?: ArticleImageOmit
    articleLike?: ArticleLikeOmit
    community?: CommunityOmit
    event?: EventOmit
    eventImage?: EventImageOmit
    eventScrap?: EventScrapOmit
    term?: TermOmit
    user?: UserOmit
    userTerm?: UserTermOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    articleImage: number
    articleLike: number
    ArticleComment: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articleImage?: boolean | ArticleCountOutputTypeCountArticleImageArgs
    articleLike?: boolean | ArticleCountOutputTypeCountArticleLikeArgs
    ArticleComment?: boolean | ArticleCountOutputTypeCountArticleCommentArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountArticleImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleImageWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountArticleLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleLikeWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountArticleCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCommentWhereInput
  }


  /**
   * Count Type ArticleCommentCountOutputType
   */

  export type ArticleCommentCountOutputType = {
    replies: number
    articleCommentLike: number
  }

  export type ArticleCommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | ArticleCommentCountOutputTypeCountRepliesArgs
    articleCommentLike?: boolean | ArticleCommentCountOutputTypeCountArticleCommentLikeArgs
  }

  // Custom InputTypes
  /**
   * ArticleCommentCountOutputType without action
   */
  export type ArticleCommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentCountOutputType
     */
    select?: ArticleCommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCommentCountOutputType without action
   */
  export type ArticleCommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCommentWhereInput
  }

  /**
   * ArticleCommentCountOutputType without action
   */
  export type ArticleCommentCountOutputTypeCountArticleCommentLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCommentLikeWhereInput
  }


  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    article: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | CommunityCountOutputTypeCountArticleArgs
  }

  // Custom InputTypes
  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    eventImage: number
    eventScrap: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventImage?: boolean | EventCountOutputTypeCountEventImageArgs
    eventScrap?: boolean | EventCountOutputTypeCountEventScrapArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventImageWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventScrapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScrapWhereInput
  }


  /**
   * Count Type TermCountOutputType
   */

  export type TermCountOutputType = {
    userTerm: number
  }

  export type TermCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTerm?: boolean | TermCountOutputTypeCountUserTermArgs
  }

  // Custom InputTypes
  /**
   * TermCountOutputType without action
   */
  export type TermCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermCountOutputType
     */
    select?: TermCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TermCountOutputType without action
   */
  export type TermCountOutputTypeCountUserTermArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTermWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    article: number
    articleComment: number
    articleCommentLike: number
    articleLike: number
    event: number
    eventScrap: number
    userTerm: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | UserCountOutputTypeCountArticleArgs
    articleComment?: boolean | UserCountOutputTypeCountArticleCommentArgs
    articleCommentLike?: boolean | UserCountOutputTypeCountArticleCommentLikeArgs
    articleLike?: boolean | UserCountOutputTypeCountArticleLikeArgs
    event?: boolean | UserCountOutputTypeCountEventArgs
    eventScrap?: boolean | UserCountOutputTypeCountEventScrapArgs
    userTerm?: boolean | UserCountOutputTypeCountUserTermArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticleCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticleCommentLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCommentLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticleLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventScrapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScrapWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTermArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTermWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
    communityId: number | null
    authorId: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: bigint | null
    communityId: bigint | null
    authorId: bigint | null
  }

  export type ArticleMinAggregateOutputType = {
    id: bigint | null
    communityId: bigint | null
    title: string | null
    content: string | null
    isAnonymous: boolean | null
    authorId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: bigint | null
    communityId: bigint | null
    title: string | null
    content: string | null
    isAnonymous: boolean | null
    authorId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    communityId: number
    title: number
    content: number
    isAnonymous: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
    communityId?: true
    authorId?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
    communityId?: true
    authorId?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    communityId?: true
    title?: true
    content?: true
    isAnonymous?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    communityId?: true
    title?: true
    content?: true
    isAnonymous?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    communityId?: true
    title?: true
    content?: true
    isAnonymous?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: bigint
    communityId: bigint
    title: string
    content: string
    isAnonymous: boolean
    authorId: bigint
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    title?: boolean
    content?: boolean
    isAnonymous?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    articleImage?: boolean | Article$articleImageArgs<ExtArgs>
    articleLike?: boolean | Article$articleLikeArgs<ExtArgs>
    ArticleComment?: boolean | Article$ArticleCommentArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>



  export type ArticleSelectScalar = {
    id?: boolean
    communityId?: boolean
    title?: boolean
    content?: boolean
    isAnonymous?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "communityId" | "title" | "content" | "isAnonymous" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    articleImage?: boolean | Article$articleImageArgs<ExtArgs>
    articleLike?: boolean | Article$articleLikeArgs<ExtArgs>
    ArticleComment?: boolean | Article$ArticleCommentArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      community: Prisma.$CommunityPayload<ExtArgs>
      articleImage: Prisma.$ArticleImagePayload<ExtArgs>[]
      articleLike: Prisma.$ArticleLikePayload<ExtArgs>[]
      ArticleComment: Prisma.$ArticleCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      communityId: bigint
      title: string
      content: string
      isAnonymous: boolean
      authorId: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    articleImage<T extends Article$articleImageArgs<ExtArgs> = {}>(args?: Subset<T, Article$articleImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articleLike<T extends Article$articleLikeArgs<ExtArgs> = {}>(args?: Subset<T, Article$articleLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ArticleComment<T extends Article$ArticleCommentArgs<ExtArgs> = {}>(args?: Subset<T, Article$ArticleCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'BigInt'>
    readonly communityId: FieldRef<"Article", 'BigInt'>
    readonly title: FieldRef<"Article", 'String'>
    readonly content: FieldRef<"Article", 'String'>
    readonly isAnonymous: FieldRef<"Article", 'Boolean'>
    readonly authorId: FieldRef<"Article", 'BigInt'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.articleImage
   */
  export type Article$articleImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    where?: ArticleImageWhereInput
    orderBy?: ArticleImageOrderByWithRelationInput | ArticleImageOrderByWithRelationInput[]
    cursor?: ArticleImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleImageScalarFieldEnum | ArticleImageScalarFieldEnum[]
  }

  /**
   * Article.articleLike
   */
  export type Article$articleLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    where?: ArticleLikeWhereInput
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    cursor?: ArticleLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * Article.ArticleComment
   */
  export type Article$ArticleCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    where?: ArticleCommentWhereInput
    orderBy?: ArticleCommentOrderByWithRelationInput | ArticleCommentOrderByWithRelationInput[]
    cursor?: ArticleCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleCommentScalarFieldEnum | ArticleCommentScalarFieldEnum[]
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model ArticleComment
   */

  export type AggregateArticleComment = {
    _count: ArticleCommentCountAggregateOutputType | null
    _avg: ArticleCommentAvgAggregateOutputType | null
    _sum: ArticleCommentSumAggregateOutputType | null
    _min: ArticleCommentMinAggregateOutputType | null
    _max: ArticleCommentMaxAggregateOutputType | null
  }

  export type ArticleCommentAvgAggregateOutputType = {
    id: number | null
    articleId: number | null
    parentCommentId: number | null
    authorId: number | null
  }

  export type ArticleCommentSumAggregateOutputType = {
    id: bigint | null
    articleId: bigint | null
    parentCommentId: bigint | null
    authorId: bigint | null
  }

  export type ArticleCommentMinAggregateOutputType = {
    id: bigint | null
    articleId: bigint | null
    parentCommentId: bigint | null
    content: string | null
    authorId: bigint | null
    isAnonymous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCommentMaxAggregateOutputType = {
    id: bigint | null
    articleId: bigint | null
    parentCommentId: bigint | null
    content: string | null
    authorId: bigint | null
    isAnonymous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCommentCountAggregateOutputType = {
    id: number
    articleId: number
    parentCommentId: number
    content: number
    authorId: number
    isAnonymous: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleCommentAvgAggregateInputType = {
    id?: true
    articleId?: true
    parentCommentId?: true
    authorId?: true
  }

  export type ArticleCommentSumAggregateInputType = {
    id?: true
    articleId?: true
    parentCommentId?: true
    authorId?: true
  }

  export type ArticleCommentMinAggregateInputType = {
    id?: true
    articleId?: true
    parentCommentId?: true
    content?: true
    authorId?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCommentMaxAggregateInputType = {
    id?: true
    articleId?: true
    parentCommentId?: true
    content?: true
    authorId?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCommentCountAggregateInputType = {
    id?: true
    articleId?: true
    parentCommentId?: true
    content?: true
    authorId?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleComment to aggregate.
     */
    where?: ArticleCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleComments to fetch.
     */
    orderBy?: ArticleCommentOrderByWithRelationInput | ArticleCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleComments
    **/
    _count?: true | ArticleCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleCommentMaxAggregateInputType
  }

  export type GetArticleCommentAggregateType<T extends ArticleCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleComment[P]>
      : GetScalarType<T[P], AggregateArticleComment[P]>
  }




  export type ArticleCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCommentWhereInput
    orderBy?: ArticleCommentOrderByWithAggregationInput | ArticleCommentOrderByWithAggregationInput[]
    by: ArticleCommentScalarFieldEnum[] | ArticleCommentScalarFieldEnum
    having?: ArticleCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCommentCountAggregateInputType | true
    _avg?: ArticleCommentAvgAggregateInputType
    _sum?: ArticleCommentSumAggregateInputType
    _min?: ArticleCommentMinAggregateInputType
    _max?: ArticleCommentMaxAggregateInputType
  }

  export type ArticleCommentGroupByOutputType = {
    id: bigint
    articleId: bigint
    parentCommentId: bigint | null
    content: string
    authorId: bigint
    isAnonymous: boolean
    createdAt: Date
    updatedAt: Date
    _count: ArticleCommentCountAggregateOutputType | null
    _avg: ArticleCommentAvgAggregateOutputType | null
    _sum: ArticleCommentSumAggregateOutputType | null
    _min: ArticleCommentMinAggregateOutputType | null
    _max: ArticleCommentMaxAggregateOutputType | null
  }

  type GetArticleCommentGroupByPayload<T extends ArticleCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleCommentGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleCommentGroupByOutputType[P]>
        }
      >
    >


  export type ArticleCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    parentCommentId?: boolean
    content?: boolean
    authorId?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    parentComment?: boolean | ArticleComment$parentCommentArgs<ExtArgs>
    replies?: boolean | ArticleComment$repliesArgs<ExtArgs>
    articleCommentLike?: boolean | ArticleComment$articleCommentLikeArgs<ExtArgs>
    _count?: boolean | ArticleCommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleComment"]>



  export type ArticleCommentSelectScalar = {
    id?: boolean
    articleId?: boolean
    parentCommentId?: boolean
    content?: boolean
    authorId?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "parentCommentId" | "content" | "authorId" | "isAnonymous" | "createdAt" | "updatedAt", ExtArgs["result"]["articleComment"]>
  export type ArticleCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    parentComment?: boolean | ArticleComment$parentCommentArgs<ExtArgs>
    replies?: boolean | ArticleComment$repliesArgs<ExtArgs>
    articleCommentLike?: boolean | ArticleComment$articleCommentLikeArgs<ExtArgs>
    _count?: boolean | ArticleCommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArticleCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleComment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      article: Prisma.$ArticlePayload<ExtArgs>
      parentComment: Prisma.$ArticleCommentPayload<ExtArgs> | null
      replies: Prisma.$ArticleCommentPayload<ExtArgs>[]
      articleCommentLike: Prisma.$ArticleCommentLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      articleId: bigint
      parentCommentId: bigint | null
      content: string
      authorId: bigint
      isAnonymous: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleComment"]>
    composites: {}
  }

  type ArticleCommentGetPayload<S extends boolean | null | undefined | ArticleCommentDefaultArgs> = $Result.GetResult<Prisma.$ArticleCommentPayload, S>

  type ArticleCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCommentCountAggregateInputType | true
    }

  export interface ArticleCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleComment'], meta: { name: 'ArticleComment' } }
    /**
     * Find zero or one ArticleComment that matches the filter.
     * @param {ArticleCommentFindUniqueArgs} args - Arguments to find a ArticleComment
     * @example
     * // Get one ArticleComment
     * const articleComment = await prisma.articleComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleCommentFindUniqueArgs>(args: SelectSubset<T, ArticleCommentFindUniqueArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleCommentFindUniqueOrThrowArgs} args - Arguments to find a ArticleComment
     * @example
     * // Get one ArticleComment
     * const articleComment = await prisma.articleComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentFindFirstArgs} args - Arguments to find a ArticleComment
     * @example
     * // Get one ArticleComment
     * const articleComment = await prisma.articleComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleCommentFindFirstArgs>(args?: SelectSubset<T, ArticleCommentFindFirstArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentFindFirstOrThrowArgs} args - Arguments to find a ArticleComment
     * @example
     * // Get one ArticleComment
     * const articleComment = await prisma.articleComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleComments
     * const articleComments = await prisma.articleComment.findMany()
     * 
     * // Get first 10 ArticleComments
     * const articleComments = await prisma.articleComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleCommentWithIdOnly = await prisma.articleComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleCommentFindManyArgs>(args?: SelectSubset<T, ArticleCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleComment.
     * @param {ArticleCommentCreateArgs} args - Arguments to create a ArticleComment.
     * @example
     * // Create one ArticleComment
     * const ArticleComment = await prisma.articleComment.create({
     *   data: {
     *     // ... data to create a ArticleComment
     *   }
     * })
     * 
     */
    create<T extends ArticleCommentCreateArgs>(args: SelectSubset<T, ArticleCommentCreateArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleComments.
     * @param {ArticleCommentCreateManyArgs} args - Arguments to create many ArticleComments.
     * @example
     * // Create many ArticleComments
     * const articleComment = await prisma.articleComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCommentCreateManyArgs>(args?: SelectSubset<T, ArticleCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleComment.
     * @param {ArticleCommentDeleteArgs} args - Arguments to delete one ArticleComment.
     * @example
     * // Delete one ArticleComment
     * const ArticleComment = await prisma.articleComment.delete({
     *   where: {
     *     // ... filter to delete one ArticleComment
     *   }
     * })
     * 
     */
    delete<T extends ArticleCommentDeleteArgs>(args: SelectSubset<T, ArticleCommentDeleteArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleComment.
     * @param {ArticleCommentUpdateArgs} args - Arguments to update one ArticleComment.
     * @example
     * // Update one ArticleComment
     * const articleComment = await prisma.articleComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleCommentUpdateArgs>(args: SelectSubset<T, ArticleCommentUpdateArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleComments.
     * @param {ArticleCommentDeleteManyArgs} args - Arguments to filter ArticleComments to delete.
     * @example
     * // Delete a few ArticleComments
     * const { count } = await prisma.articleComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleCommentDeleteManyArgs>(args?: SelectSubset<T, ArticleCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleComments
     * const articleComment = await prisma.articleComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleCommentUpdateManyArgs>(args: SelectSubset<T, ArticleCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleComment.
     * @param {ArticleCommentUpsertArgs} args - Arguments to update or create a ArticleComment.
     * @example
     * // Update or create a ArticleComment
     * const articleComment = await prisma.articleComment.upsert({
     *   create: {
     *     // ... data to create a ArticleComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleComment we want to update
     *   }
     * })
     */
    upsert<T extends ArticleCommentUpsertArgs>(args: SelectSubset<T, ArticleCommentUpsertArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentCountArgs} args - Arguments to filter ArticleComments to count.
     * @example
     * // Count the number of ArticleComments
     * const count = await prisma.articleComment.count({
     *   where: {
     *     // ... the filter for the ArticleComments we want to count
     *   }
     * })
    **/
    count<T extends ArticleCommentCountArgs>(
      args?: Subset<T, ArticleCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleCommentAggregateArgs>(args: Subset<T, ArticleCommentAggregateArgs>): Prisma.PrismaPromise<GetArticleCommentAggregateType<T>>

    /**
     * Group by ArticleComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleCommentGroupByArgs['orderBy'] }
        : { orderBy?: ArticleCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleComment model
   */
  readonly fields: ArticleCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parentComment<T extends ArticleComment$parentCommentArgs<ExtArgs> = {}>(args?: Subset<T, ArticleComment$parentCommentArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends ArticleComment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, ArticleComment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articleCommentLike<T extends ArticleComment$articleCommentLikeArgs<ExtArgs> = {}>(args?: Subset<T, ArticleComment$articleCommentLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleComment model
   */
  interface ArticleCommentFieldRefs {
    readonly id: FieldRef<"ArticleComment", 'BigInt'>
    readonly articleId: FieldRef<"ArticleComment", 'BigInt'>
    readonly parentCommentId: FieldRef<"ArticleComment", 'BigInt'>
    readonly content: FieldRef<"ArticleComment", 'String'>
    readonly authorId: FieldRef<"ArticleComment", 'BigInt'>
    readonly isAnonymous: FieldRef<"ArticleComment", 'Boolean'>
    readonly createdAt: FieldRef<"ArticleComment", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleComment findUnique
   */
  export type ArticleCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleComment to fetch.
     */
    where: ArticleCommentWhereUniqueInput
  }

  /**
   * ArticleComment findUniqueOrThrow
   */
  export type ArticleCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleComment to fetch.
     */
    where: ArticleCommentWhereUniqueInput
  }

  /**
   * ArticleComment findFirst
   */
  export type ArticleCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleComment to fetch.
     */
    where?: ArticleCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleComments to fetch.
     */
    orderBy?: ArticleCommentOrderByWithRelationInput | ArticleCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleComments.
     */
    cursor?: ArticleCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleComments.
     */
    distinct?: ArticleCommentScalarFieldEnum | ArticleCommentScalarFieldEnum[]
  }

  /**
   * ArticleComment findFirstOrThrow
   */
  export type ArticleCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleComment to fetch.
     */
    where?: ArticleCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleComments to fetch.
     */
    orderBy?: ArticleCommentOrderByWithRelationInput | ArticleCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleComments.
     */
    cursor?: ArticleCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleComments.
     */
    distinct?: ArticleCommentScalarFieldEnum | ArticleCommentScalarFieldEnum[]
  }

  /**
   * ArticleComment findMany
   */
  export type ArticleCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    /**
     * Filter, which ArticleComments to fetch.
     */
    where?: ArticleCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleComments to fetch.
     */
    orderBy?: ArticleCommentOrderByWithRelationInput | ArticleCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleComments.
     */
    cursor?: ArticleCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleComments.
     */
    skip?: number
    distinct?: ArticleCommentScalarFieldEnum | ArticleCommentScalarFieldEnum[]
  }

  /**
   * ArticleComment create
   */
  export type ArticleCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleComment.
     */
    data: XOR<ArticleCommentCreateInput, ArticleCommentUncheckedCreateInput>
  }

  /**
   * ArticleComment createMany
   */
  export type ArticleCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleComments.
     */
    data: ArticleCommentCreateManyInput | ArticleCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleComment update
   */
  export type ArticleCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleComment.
     */
    data: XOR<ArticleCommentUpdateInput, ArticleCommentUncheckedUpdateInput>
    /**
     * Choose, which ArticleComment to update.
     */
    where: ArticleCommentWhereUniqueInput
  }

  /**
   * ArticleComment updateMany
   */
  export type ArticleCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleComments.
     */
    data: XOR<ArticleCommentUpdateManyMutationInput, ArticleCommentUncheckedUpdateManyInput>
    /**
     * Filter which ArticleComments to update
     */
    where?: ArticleCommentWhereInput
    /**
     * Limit how many ArticleComments to update.
     */
    limit?: number
  }

  /**
   * ArticleComment upsert
   */
  export type ArticleCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleComment to update in case it exists.
     */
    where: ArticleCommentWhereUniqueInput
    /**
     * In case the ArticleComment found by the `where` argument doesn't exist, create a new ArticleComment with this data.
     */
    create: XOR<ArticleCommentCreateInput, ArticleCommentUncheckedCreateInput>
    /**
     * In case the ArticleComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleCommentUpdateInput, ArticleCommentUncheckedUpdateInput>
  }

  /**
   * ArticleComment delete
   */
  export type ArticleCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    /**
     * Filter which ArticleComment to delete.
     */
    where: ArticleCommentWhereUniqueInput
  }

  /**
   * ArticleComment deleteMany
   */
  export type ArticleCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleComments to delete
     */
    where?: ArticleCommentWhereInput
    /**
     * Limit how many ArticleComments to delete.
     */
    limit?: number
  }

  /**
   * ArticleComment.parentComment
   */
  export type ArticleComment$parentCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    where?: ArticleCommentWhereInput
  }

  /**
   * ArticleComment.replies
   */
  export type ArticleComment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    where?: ArticleCommentWhereInput
    orderBy?: ArticleCommentOrderByWithRelationInput | ArticleCommentOrderByWithRelationInput[]
    cursor?: ArticleCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleCommentScalarFieldEnum | ArticleCommentScalarFieldEnum[]
  }

  /**
   * ArticleComment.articleCommentLike
   */
  export type ArticleComment$articleCommentLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    where?: ArticleCommentLikeWhereInput
    orderBy?: ArticleCommentLikeOrderByWithRelationInput | ArticleCommentLikeOrderByWithRelationInput[]
    cursor?: ArticleCommentLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleCommentLikeScalarFieldEnum | ArticleCommentLikeScalarFieldEnum[]
  }

  /**
   * ArticleComment without action
   */
  export type ArticleCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
  }


  /**
   * Model ArticleCommentLike
   */

  export type AggregateArticleCommentLike = {
    _count: ArticleCommentLikeCountAggregateOutputType | null
    _avg: ArticleCommentLikeAvgAggregateOutputType | null
    _sum: ArticleCommentLikeSumAggregateOutputType | null
    _min: ArticleCommentLikeMinAggregateOutputType | null
    _max: ArticleCommentLikeMaxAggregateOutputType | null
  }

  export type ArticleCommentLikeAvgAggregateOutputType = {
    commentId: number | null
    userId: number | null
  }

  export type ArticleCommentLikeSumAggregateOutputType = {
    commentId: bigint | null
    userId: bigint | null
  }

  export type ArticleCommentLikeMinAggregateOutputType = {
    commentId: bigint | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCommentLikeMaxAggregateOutputType = {
    commentId: bigint | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCommentLikeCountAggregateOutputType = {
    commentId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleCommentLikeAvgAggregateInputType = {
    commentId?: true
    userId?: true
  }

  export type ArticleCommentLikeSumAggregateInputType = {
    commentId?: true
    userId?: true
  }

  export type ArticleCommentLikeMinAggregateInputType = {
    commentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCommentLikeMaxAggregateInputType = {
    commentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCommentLikeCountAggregateInputType = {
    commentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleCommentLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCommentLike to aggregate.
     */
    where?: ArticleCommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCommentLikes to fetch.
     */
    orderBy?: ArticleCommentLikeOrderByWithRelationInput | ArticleCommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleCommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCommentLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleCommentLikes
    **/
    _count?: true | ArticleCommentLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleCommentLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleCommentLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleCommentLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleCommentLikeMaxAggregateInputType
  }

  export type GetArticleCommentLikeAggregateType<T extends ArticleCommentLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleCommentLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleCommentLike[P]>
      : GetScalarType<T[P], AggregateArticleCommentLike[P]>
  }




  export type ArticleCommentLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCommentLikeWhereInput
    orderBy?: ArticleCommentLikeOrderByWithAggregationInput | ArticleCommentLikeOrderByWithAggregationInput[]
    by: ArticleCommentLikeScalarFieldEnum[] | ArticleCommentLikeScalarFieldEnum
    having?: ArticleCommentLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCommentLikeCountAggregateInputType | true
    _avg?: ArticleCommentLikeAvgAggregateInputType
    _sum?: ArticleCommentLikeSumAggregateInputType
    _min?: ArticleCommentLikeMinAggregateInputType
    _max?: ArticleCommentLikeMaxAggregateInputType
  }

  export type ArticleCommentLikeGroupByOutputType = {
    commentId: bigint
    userId: bigint
    createdAt: Date
    updatedAt: Date
    _count: ArticleCommentLikeCountAggregateOutputType | null
    _avg: ArticleCommentLikeAvgAggregateOutputType | null
    _sum: ArticleCommentLikeSumAggregateOutputType | null
    _min: ArticleCommentLikeMinAggregateOutputType | null
    _max: ArticleCommentLikeMaxAggregateOutputType | null
  }

  type GetArticleCommentLikeGroupByPayload<T extends ArticleCommentLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleCommentLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleCommentLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleCommentLikeGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleCommentLikeGroupByOutputType[P]>
        }
      >
    >


  export type ArticleCommentLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articleComment?: boolean | ArticleCommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleCommentLike"]>



  export type ArticleCommentLikeSelectScalar = {
    commentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleCommentLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"commentId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["articleCommentLike"]>
  export type ArticleCommentLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articleComment?: boolean | ArticleCommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticleCommentLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleCommentLike"
    objects: {
      articleComment: Prisma.$ArticleCommentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      commentId: bigint
      userId: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleCommentLike"]>
    composites: {}
  }

  type ArticleCommentLikeGetPayload<S extends boolean | null | undefined | ArticleCommentLikeDefaultArgs> = $Result.GetResult<Prisma.$ArticleCommentLikePayload, S>

  type ArticleCommentLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleCommentLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCommentLikeCountAggregateInputType | true
    }

  export interface ArticleCommentLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleCommentLike'], meta: { name: 'ArticleCommentLike' } }
    /**
     * Find zero or one ArticleCommentLike that matches the filter.
     * @param {ArticleCommentLikeFindUniqueArgs} args - Arguments to find a ArticleCommentLike
     * @example
     * // Get one ArticleCommentLike
     * const articleCommentLike = await prisma.articleCommentLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleCommentLikeFindUniqueArgs>(args: SelectSubset<T, ArticleCommentLikeFindUniqueArgs<ExtArgs>>): Prisma__ArticleCommentLikeClient<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleCommentLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleCommentLikeFindUniqueOrThrowArgs} args - Arguments to find a ArticleCommentLike
     * @example
     * // Get one ArticleCommentLike
     * const articleCommentLike = await prisma.articleCommentLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleCommentLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleCommentLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleCommentLikeClient<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleCommentLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentLikeFindFirstArgs} args - Arguments to find a ArticleCommentLike
     * @example
     * // Get one ArticleCommentLike
     * const articleCommentLike = await prisma.articleCommentLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleCommentLikeFindFirstArgs>(args?: SelectSubset<T, ArticleCommentLikeFindFirstArgs<ExtArgs>>): Prisma__ArticleCommentLikeClient<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleCommentLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentLikeFindFirstOrThrowArgs} args - Arguments to find a ArticleCommentLike
     * @example
     * // Get one ArticleCommentLike
     * const articleCommentLike = await prisma.articleCommentLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleCommentLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleCommentLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleCommentLikeClient<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleCommentLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleCommentLikes
     * const articleCommentLikes = await prisma.articleCommentLike.findMany()
     * 
     * // Get first 10 ArticleCommentLikes
     * const articleCommentLikes = await prisma.articleCommentLike.findMany({ take: 10 })
     * 
     * // Only select the `commentId`
     * const articleCommentLikeWithCommentIdOnly = await prisma.articleCommentLike.findMany({ select: { commentId: true } })
     * 
     */
    findMany<T extends ArticleCommentLikeFindManyArgs>(args?: SelectSubset<T, ArticleCommentLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleCommentLike.
     * @param {ArticleCommentLikeCreateArgs} args - Arguments to create a ArticleCommentLike.
     * @example
     * // Create one ArticleCommentLike
     * const ArticleCommentLike = await prisma.articleCommentLike.create({
     *   data: {
     *     // ... data to create a ArticleCommentLike
     *   }
     * })
     * 
     */
    create<T extends ArticleCommentLikeCreateArgs>(args: SelectSubset<T, ArticleCommentLikeCreateArgs<ExtArgs>>): Prisma__ArticleCommentLikeClient<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleCommentLikes.
     * @param {ArticleCommentLikeCreateManyArgs} args - Arguments to create many ArticleCommentLikes.
     * @example
     * // Create many ArticleCommentLikes
     * const articleCommentLike = await prisma.articleCommentLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCommentLikeCreateManyArgs>(args?: SelectSubset<T, ArticleCommentLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleCommentLike.
     * @param {ArticleCommentLikeDeleteArgs} args - Arguments to delete one ArticleCommentLike.
     * @example
     * // Delete one ArticleCommentLike
     * const ArticleCommentLike = await prisma.articleCommentLike.delete({
     *   where: {
     *     // ... filter to delete one ArticleCommentLike
     *   }
     * })
     * 
     */
    delete<T extends ArticleCommentLikeDeleteArgs>(args: SelectSubset<T, ArticleCommentLikeDeleteArgs<ExtArgs>>): Prisma__ArticleCommentLikeClient<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleCommentLike.
     * @param {ArticleCommentLikeUpdateArgs} args - Arguments to update one ArticleCommentLike.
     * @example
     * // Update one ArticleCommentLike
     * const articleCommentLike = await prisma.articleCommentLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleCommentLikeUpdateArgs>(args: SelectSubset<T, ArticleCommentLikeUpdateArgs<ExtArgs>>): Prisma__ArticleCommentLikeClient<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleCommentLikes.
     * @param {ArticleCommentLikeDeleteManyArgs} args - Arguments to filter ArticleCommentLikes to delete.
     * @example
     * // Delete a few ArticleCommentLikes
     * const { count } = await prisma.articleCommentLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleCommentLikeDeleteManyArgs>(args?: SelectSubset<T, ArticleCommentLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleCommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleCommentLikes
     * const articleCommentLike = await prisma.articleCommentLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleCommentLikeUpdateManyArgs>(args: SelectSubset<T, ArticleCommentLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleCommentLike.
     * @param {ArticleCommentLikeUpsertArgs} args - Arguments to update or create a ArticleCommentLike.
     * @example
     * // Update or create a ArticleCommentLike
     * const articleCommentLike = await prisma.articleCommentLike.upsert({
     *   create: {
     *     // ... data to create a ArticleCommentLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleCommentLike we want to update
     *   }
     * })
     */
    upsert<T extends ArticleCommentLikeUpsertArgs>(args: SelectSubset<T, ArticleCommentLikeUpsertArgs<ExtArgs>>): Prisma__ArticleCommentLikeClient<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleCommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentLikeCountArgs} args - Arguments to filter ArticleCommentLikes to count.
     * @example
     * // Count the number of ArticleCommentLikes
     * const count = await prisma.articleCommentLike.count({
     *   where: {
     *     // ... the filter for the ArticleCommentLikes we want to count
     *   }
     * })
    **/
    count<T extends ArticleCommentLikeCountArgs>(
      args?: Subset<T, ArticleCommentLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCommentLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleCommentLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleCommentLikeAggregateArgs>(args: Subset<T, ArticleCommentLikeAggregateArgs>): Prisma.PrismaPromise<GetArticleCommentLikeAggregateType<T>>

    /**
     * Group by ArticleCommentLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleCommentLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleCommentLikeGroupByArgs['orderBy'] }
        : { orderBy?: ArticleCommentLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleCommentLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleCommentLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleCommentLike model
   */
  readonly fields: ArticleCommentLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleCommentLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleCommentLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articleComment<T extends ArticleCommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleCommentDefaultArgs<ExtArgs>>): Prisma__ArticleCommentClient<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleCommentLike model
   */
  interface ArticleCommentLikeFieldRefs {
    readonly commentId: FieldRef<"ArticleCommentLike", 'BigInt'>
    readonly userId: FieldRef<"ArticleCommentLike", 'BigInt'>
    readonly createdAt: FieldRef<"ArticleCommentLike", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleCommentLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleCommentLike findUnique
   */
  export type ArticleCommentLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCommentLike to fetch.
     */
    where: ArticleCommentLikeWhereUniqueInput
  }

  /**
   * ArticleCommentLike findUniqueOrThrow
   */
  export type ArticleCommentLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCommentLike to fetch.
     */
    where: ArticleCommentLikeWhereUniqueInput
  }

  /**
   * ArticleCommentLike findFirst
   */
  export type ArticleCommentLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCommentLike to fetch.
     */
    where?: ArticleCommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCommentLikes to fetch.
     */
    orderBy?: ArticleCommentLikeOrderByWithRelationInput | ArticleCommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCommentLikes.
     */
    cursor?: ArticleCommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCommentLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCommentLikes.
     */
    distinct?: ArticleCommentLikeScalarFieldEnum | ArticleCommentLikeScalarFieldEnum[]
  }

  /**
   * ArticleCommentLike findFirstOrThrow
   */
  export type ArticleCommentLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCommentLike to fetch.
     */
    where?: ArticleCommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCommentLikes to fetch.
     */
    orderBy?: ArticleCommentLikeOrderByWithRelationInput | ArticleCommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCommentLikes.
     */
    cursor?: ArticleCommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCommentLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCommentLikes.
     */
    distinct?: ArticleCommentLikeScalarFieldEnum | ArticleCommentLikeScalarFieldEnum[]
  }

  /**
   * ArticleCommentLike findMany
   */
  export type ArticleCommentLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleCommentLikes to fetch.
     */
    where?: ArticleCommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCommentLikes to fetch.
     */
    orderBy?: ArticleCommentLikeOrderByWithRelationInput | ArticleCommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleCommentLikes.
     */
    cursor?: ArticleCommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCommentLikes.
     */
    skip?: number
    distinct?: ArticleCommentLikeScalarFieldEnum | ArticleCommentLikeScalarFieldEnum[]
  }

  /**
   * ArticleCommentLike create
   */
  export type ArticleCommentLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleCommentLike.
     */
    data: XOR<ArticleCommentLikeCreateInput, ArticleCommentLikeUncheckedCreateInput>
  }

  /**
   * ArticleCommentLike createMany
   */
  export type ArticleCommentLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleCommentLikes.
     */
    data: ArticleCommentLikeCreateManyInput | ArticleCommentLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleCommentLike update
   */
  export type ArticleCommentLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleCommentLike.
     */
    data: XOR<ArticleCommentLikeUpdateInput, ArticleCommentLikeUncheckedUpdateInput>
    /**
     * Choose, which ArticleCommentLike to update.
     */
    where: ArticleCommentLikeWhereUniqueInput
  }

  /**
   * ArticleCommentLike updateMany
   */
  export type ArticleCommentLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleCommentLikes.
     */
    data: XOR<ArticleCommentLikeUpdateManyMutationInput, ArticleCommentLikeUncheckedUpdateManyInput>
    /**
     * Filter which ArticleCommentLikes to update
     */
    where?: ArticleCommentLikeWhereInput
    /**
     * Limit how many ArticleCommentLikes to update.
     */
    limit?: number
  }

  /**
   * ArticleCommentLike upsert
   */
  export type ArticleCommentLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleCommentLike to update in case it exists.
     */
    where: ArticleCommentLikeWhereUniqueInput
    /**
     * In case the ArticleCommentLike found by the `where` argument doesn't exist, create a new ArticleCommentLike with this data.
     */
    create: XOR<ArticleCommentLikeCreateInput, ArticleCommentLikeUncheckedCreateInput>
    /**
     * In case the ArticleCommentLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleCommentLikeUpdateInput, ArticleCommentLikeUncheckedUpdateInput>
  }

  /**
   * ArticleCommentLike delete
   */
  export type ArticleCommentLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    /**
     * Filter which ArticleCommentLike to delete.
     */
    where: ArticleCommentLikeWhereUniqueInput
  }

  /**
   * ArticleCommentLike deleteMany
   */
  export type ArticleCommentLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCommentLikes to delete
     */
    where?: ArticleCommentLikeWhereInput
    /**
     * Limit how many ArticleCommentLikes to delete.
     */
    limit?: number
  }

  /**
   * ArticleCommentLike without action
   */
  export type ArticleCommentLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
  }


  /**
   * Model ArticleImage
   */

  export type AggregateArticleImage = {
    _count: ArticleImageCountAggregateOutputType | null
    _avg: ArticleImageAvgAggregateOutputType | null
    _sum: ArticleImageSumAggregateOutputType | null
    _min: ArticleImageMinAggregateOutputType | null
    _max: ArticleImageMaxAggregateOutputType | null
  }

  export type ArticleImageAvgAggregateOutputType = {
    articleId: number | null
    order: number | null
  }

  export type ArticleImageSumAggregateOutputType = {
    articleId: bigint | null
    order: number | null
  }

  export type ArticleImageMinAggregateOutputType = {
    articleId: bigint | null
    imageUrl: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleImageMaxAggregateOutputType = {
    articleId: bigint | null
    imageUrl: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleImageCountAggregateOutputType = {
    articleId: number
    imageUrl: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleImageAvgAggregateInputType = {
    articleId?: true
    order?: true
  }

  export type ArticleImageSumAggregateInputType = {
    articleId?: true
    order?: true
  }

  export type ArticleImageMinAggregateInputType = {
    articleId?: true
    imageUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleImageMaxAggregateInputType = {
    articleId?: true
    imageUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleImageCountAggregateInputType = {
    articleId?: true
    imageUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleImage to aggregate.
     */
    where?: ArticleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleImages to fetch.
     */
    orderBy?: ArticleImageOrderByWithRelationInput | ArticleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleImages
    **/
    _count?: true | ArticleImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleImageMaxAggregateInputType
  }

  export type GetArticleImageAggregateType<T extends ArticleImageAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleImage[P]>
      : GetScalarType<T[P], AggregateArticleImage[P]>
  }




  export type ArticleImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleImageWhereInput
    orderBy?: ArticleImageOrderByWithAggregationInput | ArticleImageOrderByWithAggregationInput[]
    by: ArticleImageScalarFieldEnum[] | ArticleImageScalarFieldEnum
    having?: ArticleImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleImageCountAggregateInputType | true
    _avg?: ArticleImageAvgAggregateInputType
    _sum?: ArticleImageSumAggregateInputType
    _min?: ArticleImageMinAggregateInputType
    _max?: ArticleImageMaxAggregateInputType
  }

  export type ArticleImageGroupByOutputType = {
    articleId: bigint
    imageUrl: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ArticleImageCountAggregateOutputType | null
    _avg: ArticleImageAvgAggregateOutputType | null
    _sum: ArticleImageSumAggregateOutputType | null
    _min: ArticleImageMinAggregateOutputType | null
    _max: ArticleImageMaxAggregateOutputType | null
  }

  type GetArticleImageGroupByPayload<T extends ArticleImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleImageGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleImageGroupByOutputType[P]>
        }
      >
    >


  export type ArticleImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    imageUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleImage"]>



  export type ArticleImageSelectScalar = {
    articleId?: boolean
    imageUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "imageUrl" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["articleImage"]>
  export type ArticleImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $ArticleImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleImage"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: bigint
      imageUrl: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleImage"]>
    composites: {}
  }

  type ArticleImageGetPayload<S extends boolean | null | undefined | ArticleImageDefaultArgs> = $Result.GetResult<Prisma.$ArticleImagePayload, S>

  type ArticleImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleImageCountAggregateInputType | true
    }

  export interface ArticleImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleImage'], meta: { name: 'ArticleImage' } }
    /**
     * Find zero or one ArticleImage that matches the filter.
     * @param {ArticleImageFindUniqueArgs} args - Arguments to find a ArticleImage
     * @example
     * // Get one ArticleImage
     * const articleImage = await prisma.articleImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleImageFindUniqueArgs>(args: SelectSubset<T, ArticleImageFindUniqueArgs<ExtArgs>>): Prisma__ArticleImageClient<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleImageFindUniqueOrThrowArgs} args - Arguments to find a ArticleImage
     * @example
     * // Get one ArticleImage
     * const articleImage = await prisma.articleImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleImageClient<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImageFindFirstArgs} args - Arguments to find a ArticleImage
     * @example
     * // Get one ArticleImage
     * const articleImage = await prisma.articleImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleImageFindFirstArgs>(args?: SelectSubset<T, ArticleImageFindFirstArgs<ExtArgs>>): Prisma__ArticleImageClient<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImageFindFirstOrThrowArgs} args - Arguments to find a ArticleImage
     * @example
     * // Get one ArticleImage
     * const articleImage = await prisma.articleImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleImageClient<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleImages
     * const articleImages = await prisma.articleImage.findMany()
     * 
     * // Get first 10 ArticleImages
     * const articleImages = await prisma.articleImage.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const articleImageWithArticleIdOnly = await prisma.articleImage.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends ArticleImageFindManyArgs>(args?: SelectSubset<T, ArticleImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleImage.
     * @param {ArticleImageCreateArgs} args - Arguments to create a ArticleImage.
     * @example
     * // Create one ArticleImage
     * const ArticleImage = await prisma.articleImage.create({
     *   data: {
     *     // ... data to create a ArticleImage
     *   }
     * })
     * 
     */
    create<T extends ArticleImageCreateArgs>(args: SelectSubset<T, ArticleImageCreateArgs<ExtArgs>>): Prisma__ArticleImageClient<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleImages.
     * @param {ArticleImageCreateManyArgs} args - Arguments to create many ArticleImages.
     * @example
     * // Create many ArticleImages
     * const articleImage = await prisma.articleImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleImageCreateManyArgs>(args?: SelectSubset<T, ArticleImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleImage.
     * @param {ArticleImageDeleteArgs} args - Arguments to delete one ArticleImage.
     * @example
     * // Delete one ArticleImage
     * const ArticleImage = await prisma.articleImage.delete({
     *   where: {
     *     // ... filter to delete one ArticleImage
     *   }
     * })
     * 
     */
    delete<T extends ArticleImageDeleteArgs>(args: SelectSubset<T, ArticleImageDeleteArgs<ExtArgs>>): Prisma__ArticleImageClient<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleImage.
     * @param {ArticleImageUpdateArgs} args - Arguments to update one ArticleImage.
     * @example
     * // Update one ArticleImage
     * const articleImage = await prisma.articleImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleImageUpdateArgs>(args: SelectSubset<T, ArticleImageUpdateArgs<ExtArgs>>): Prisma__ArticleImageClient<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleImages.
     * @param {ArticleImageDeleteManyArgs} args - Arguments to filter ArticleImages to delete.
     * @example
     * // Delete a few ArticleImages
     * const { count } = await prisma.articleImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleImageDeleteManyArgs>(args?: SelectSubset<T, ArticleImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleImages
     * const articleImage = await prisma.articleImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleImageUpdateManyArgs>(args: SelectSubset<T, ArticleImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleImage.
     * @param {ArticleImageUpsertArgs} args - Arguments to update or create a ArticleImage.
     * @example
     * // Update or create a ArticleImage
     * const articleImage = await prisma.articleImage.upsert({
     *   create: {
     *     // ... data to create a ArticleImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleImage we want to update
     *   }
     * })
     */
    upsert<T extends ArticleImageUpsertArgs>(args: SelectSubset<T, ArticleImageUpsertArgs<ExtArgs>>): Prisma__ArticleImageClient<$Result.GetResult<Prisma.$ArticleImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImageCountArgs} args - Arguments to filter ArticleImages to count.
     * @example
     * // Count the number of ArticleImages
     * const count = await prisma.articleImage.count({
     *   where: {
     *     // ... the filter for the ArticleImages we want to count
     *   }
     * })
    **/
    count<T extends ArticleImageCountArgs>(
      args?: Subset<T, ArticleImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleImageAggregateArgs>(args: Subset<T, ArticleImageAggregateArgs>): Prisma.PrismaPromise<GetArticleImageAggregateType<T>>

    /**
     * Group by ArticleImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleImageGroupByArgs['orderBy'] }
        : { orderBy?: ArticleImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleImage model
   */
  readonly fields: ArticleImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleImage model
   */
  interface ArticleImageFieldRefs {
    readonly articleId: FieldRef<"ArticleImage", 'BigInt'>
    readonly imageUrl: FieldRef<"ArticleImage", 'String'>
    readonly order: FieldRef<"ArticleImage", 'Int'>
    readonly createdAt: FieldRef<"ArticleImage", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleImage findUnique
   */
  export type ArticleImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    /**
     * Filter, which ArticleImage to fetch.
     */
    where: ArticleImageWhereUniqueInput
  }

  /**
   * ArticleImage findUniqueOrThrow
   */
  export type ArticleImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    /**
     * Filter, which ArticleImage to fetch.
     */
    where: ArticleImageWhereUniqueInput
  }

  /**
   * ArticleImage findFirst
   */
  export type ArticleImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    /**
     * Filter, which ArticleImage to fetch.
     */
    where?: ArticleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleImages to fetch.
     */
    orderBy?: ArticleImageOrderByWithRelationInput | ArticleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleImages.
     */
    cursor?: ArticleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleImages.
     */
    distinct?: ArticleImageScalarFieldEnum | ArticleImageScalarFieldEnum[]
  }

  /**
   * ArticleImage findFirstOrThrow
   */
  export type ArticleImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    /**
     * Filter, which ArticleImage to fetch.
     */
    where?: ArticleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleImages to fetch.
     */
    orderBy?: ArticleImageOrderByWithRelationInput | ArticleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleImages.
     */
    cursor?: ArticleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleImages.
     */
    distinct?: ArticleImageScalarFieldEnum | ArticleImageScalarFieldEnum[]
  }

  /**
   * ArticleImage findMany
   */
  export type ArticleImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    /**
     * Filter, which ArticleImages to fetch.
     */
    where?: ArticleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleImages to fetch.
     */
    orderBy?: ArticleImageOrderByWithRelationInput | ArticleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleImages.
     */
    cursor?: ArticleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleImages.
     */
    skip?: number
    distinct?: ArticleImageScalarFieldEnum | ArticleImageScalarFieldEnum[]
  }

  /**
   * ArticleImage create
   */
  export type ArticleImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleImage.
     */
    data: XOR<ArticleImageCreateInput, ArticleImageUncheckedCreateInput>
  }

  /**
   * ArticleImage createMany
   */
  export type ArticleImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleImages.
     */
    data: ArticleImageCreateManyInput | ArticleImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleImage update
   */
  export type ArticleImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleImage.
     */
    data: XOR<ArticleImageUpdateInput, ArticleImageUncheckedUpdateInput>
    /**
     * Choose, which ArticleImage to update.
     */
    where: ArticleImageWhereUniqueInput
  }

  /**
   * ArticleImage updateMany
   */
  export type ArticleImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleImages.
     */
    data: XOR<ArticleImageUpdateManyMutationInput, ArticleImageUncheckedUpdateManyInput>
    /**
     * Filter which ArticleImages to update
     */
    where?: ArticleImageWhereInput
    /**
     * Limit how many ArticleImages to update.
     */
    limit?: number
  }

  /**
   * ArticleImage upsert
   */
  export type ArticleImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleImage to update in case it exists.
     */
    where: ArticleImageWhereUniqueInput
    /**
     * In case the ArticleImage found by the `where` argument doesn't exist, create a new ArticleImage with this data.
     */
    create: XOR<ArticleImageCreateInput, ArticleImageUncheckedCreateInput>
    /**
     * In case the ArticleImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleImageUpdateInput, ArticleImageUncheckedUpdateInput>
  }

  /**
   * ArticleImage delete
   */
  export type ArticleImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
    /**
     * Filter which ArticleImage to delete.
     */
    where: ArticleImageWhereUniqueInput
  }

  /**
   * ArticleImage deleteMany
   */
  export type ArticleImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleImages to delete
     */
    where?: ArticleImageWhereInput
    /**
     * Limit how many ArticleImages to delete.
     */
    limit?: number
  }

  /**
   * ArticleImage without action
   */
  export type ArticleImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleImage
     */
    select?: ArticleImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleImage
     */
    omit?: ArticleImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleImageInclude<ExtArgs> | null
  }


  /**
   * Model ArticleLike
   */

  export type AggregateArticleLike = {
    _count: ArticleLikeCountAggregateOutputType | null
    _avg: ArticleLikeAvgAggregateOutputType | null
    _sum: ArticleLikeSumAggregateOutputType | null
    _min: ArticleLikeMinAggregateOutputType | null
    _max: ArticleLikeMaxAggregateOutputType | null
  }

  export type ArticleLikeAvgAggregateOutputType = {
    articleId: number | null
    userId: number | null
  }

  export type ArticleLikeSumAggregateOutputType = {
    articleId: bigint | null
    userId: bigint | null
  }

  export type ArticleLikeMinAggregateOutputType = {
    articleId: bigint | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleLikeMaxAggregateOutputType = {
    articleId: bigint | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleLikeCountAggregateOutputType = {
    articleId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleLikeAvgAggregateInputType = {
    articleId?: true
    userId?: true
  }

  export type ArticleLikeSumAggregateInputType = {
    articleId?: true
    userId?: true
  }

  export type ArticleLikeMinAggregateInputType = {
    articleId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleLikeMaxAggregateInputType = {
    articleId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleLikeCountAggregateInputType = {
    articleId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleLike to aggregate.
     */
    where?: ArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleLikes to fetch.
     */
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleLikes
    **/
    _count?: true | ArticleLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleLikeMaxAggregateInputType
  }

  export type GetArticleLikeAggregateType<T extends ArticleLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleLike[P]>
      : GetScalarType<T[P], AggregateArticleLike[P]>
  }




  export type ArticleLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleLikeWhereInput
    orderBy?: ArticleLikeOrderByWithAggregationInput | ArticleLikeOrderByWithAggregationInput[]
    by: ArticleLikeScalarFieldEnum[] | ArticleLikeScalarFieldEnum
    having?: ArticleLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleLikeCountAggregateInputType | true
    _avg?: ArticleLikeAvgAggregateInputType
    _sum?: ArticleLikeSumAggregateInputType
    _min?: ArticleLikeMinAggregateInputType
    _max?: ArticleLikeMaxAggregateInputType
  }

  export type ArticleLikeGroupByOutputType = {
    articleId: bigint
    userId: bigint
    createdAt: Date
    updatedAt: Date
    _count: ArticleLikeCountAggregateOutputType | null
    _avg: ArticleLikeAvgAggregateOutputType | null
    _sum: ArticleLikeSumAggregateOutputType | null
    _min: ArticleLikeMinAggregateOutputType | null
    _max: ArticleLikeMaxAggregateOutputType | null
  }

  type GetArticleLikeGroupByPayload<T extends ArticleLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleLikeGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleLikeGroupByOutputType[P]>
        }
      >
    >


  export type ArticleLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleLike"]>



  export type ArticleLikeSelectScalar = {
    articleId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["articleLike"]>
  export type ArticleLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticleLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleLike"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: bigint
      userId: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleLike"]>
    composites: {}
  }

  type ArticleLikeGetPayload<S extends boolean | null | undefined | ArticleLikeDefaultArgs> = $Result.GetResult<Prisma.$ArticleLikePayload, S>

  type ArticleLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleLikeCountAggregateInputType | true
    }

  export interface ArticleLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleLike'], meta: { name: 'ArticleLike' } }
    /**
     * Find zero or one ArticleLike that matches the filter.
     * @param {ArticleLikeFindUniqueArgs} args - Arguments to find a ArticleLike
     * @example
     * // Get one ArticleLike
     * const articleLike = await prisma.articleLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleLikeFindUniqueArgs>(args: SelectSubset<T, ArticleLikeFindUniqueArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleLikeFindUniqueOrThrowArgs} args - Arguments to find a ArticleLike
     * @example
     * // Get one ArticleLike
     * const articleLike = await prisma.articleLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeFindFirstArgs} args - Arguments to find a ArticleLike
     * @example
     * // Get one ArticleLike
     * const articleLike = await prisma.articleLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleLikeFindFirstArgs>(args?: SelectSubset<T, ArticleLikeFindFirstArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeFindFirstOrThrowArgs} args - Arguments to find a ArticleLike
     * @example
     * // Get one ArticleLike
     * const articleLike = await prisma.articleLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleLikes
     * const articleLikes = await prisma.articleLike.findMany()
     * 
     * // Get first 10 ArticleLikes
     * const articleLikes = await prisma.articleLike.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const articleLikeWithArticleIdOnly = await prisma.articleLike.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends ArticleLikeFindManyArgs>(args?: SelectSubset<T, ArticleLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleLike.
     * @param {ArticleLikeCreateArgs} args - Arguments to create a ArticleLike.
     * @example
     * // Create one ArticleLike
     * const ArticleLike = await prisma.articleLike.create({
     *   data: {
     *     // ... data to create a ArticleLike
     *   }
     * })
     * 
     */
    create<T extends ArticleLikeCreateArgs>(args: SelectSubset<T, ArticleLikeCreateArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleLikes.
     * @param {ArticleLikeCreateManyArgs} args - Arguments to create many ArticleLikes.
     * @example
     * // Create many ArticleLikes
     * const articleLike = await prisma.articleLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleLikeCreateManyArgs>(args?: SelectSubset<T, ArticleLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleLike.
     * @param {ArticleLikeDeleteArgs} args - Arguments to delete one ArticleLike.
     * @example
     * // Delete one ArticleLike
     * const ArticleLike = await prisma.articleLike.delete({
     *   where: {
     *     // ... filter to delete one ArticleLike
     *   }
     * })
     * 
     */
    delete<T extends ArticleLikeDeleteArgs>(args: SelectSubset<T, ArticleLikeDeleteArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleLike.
     * @param {ArticleLikeUpdateArgs} args - Arguments to update one ArticleLike.
     * @example
     * // Update one ArticleLike
     * const articleLike = await prisma.articleLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleLikeUpdateArgs>(args: SelectSubset<T, ArticleLikeUpdateArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleLikes.
     * @param {ArticleLikeDeleteManyArgs} args - Arguments to filter ArticleLikes to delete.
     * @example
     * // Delete a few ArticleLikes
     * const { count } = await prisma.articleLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleLikeDeleteManyArgs>(args?: SelectSubset<T, ArticleLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleLikes
     * const articleLike = await prisma.articleLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleLikeUpdateManyArgs>(args: SelectSubset<T, ArticleLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleLike.
     * @param {ArticleLikeUpsertArgs} args - Arguments to update or create a ArticleLike.
     * @example
     * // Update or create a ArticleLike
     * const articleLike = await prisma.articleLike.upsert({
     *   create: {
     *     // ... data to create a ArticleLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleLike we want to update
     *   }
     * })
     */
    upsert<T extends ArticleLikeUpsertArgs>(args: SelectSubset<T, ArticleLikeUpsertArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeCountArgs} args - Arguments to filter ArticleLikes to count.
     * @example
     * // Count the number of ArticleLikes
     * const count = await prisma.articleLike.count({
     *   where: {
     *     // ... the filter for the ArticleLikes we want to count
     *   }
     * })
    **/
    count<T extends ArticleLikeCountArgs>(
      args?: Subset<T, ArticleLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleLikeAggregateArgs>(args: Subset<T, ArticleLikeAggregateArgs>): Prisma.PrismaPromise<GetArticleLikeAggregateType<T>>

    /**
     * Group by ArticleLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleLikeGroupByArgs['orderBy'] }
        : { orderBy?: ArticleLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleLike model
   */
  readonly fields: ArticleLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleLike model
   */
  interface ArticleLikeFieldRefs {
    readonly articleId: FieldRef<"ArticleLike", 'BigInt'>
    readonly userId: FieldRef<"ArticleLike", 'BigInt'>
    readonly createdAt: FieldRef<"ArticleLike", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleLike findUnique
   */
  export type ArticleLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLike to fetch.
     */
    where: ArticleLikeWhereUniqueInput
  }

  /**
   * ArticleLike findUniqueOrThrow
   */
  export type ArticleLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLike to fetch.
     */
    where: ArticleLikeWhereUniqueInput
  }

  /**
   * ArticleLike findFirst
   */
  export type ArticleLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLike to fetch.
     */
    where?: ArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleLikes to fetch.
     */
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleLikes.
     */
    cursor?: ArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleLikes.
     */
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * ArticleLike findFirstOrThrow
   */
  export type ArticleLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLike to fetch.
     */
    where?: ArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleLikes to fetch.
     */
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleLikes.
     */
    cursor?: ArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleLikes.
     */
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * ArticleLike findMany
   */
  export type ArticleLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLikes to fetch.
     */
    where?: ArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleLikes to fetch.
     */
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleLikes.
     */
    cursor?: ArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleLikes.
     */
    skip?: number
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * ArticleLike create
   */
  export type ArticleLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleLike.
     */
    data: XOR<ArticleLikeCreateInput, ArticleLikeUncheckedCreateInput>
  }

  /**
   * ArticleLike createMany
   */
  export type ArticleLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleLikes.
     */
    data: ArticleLikeCreateManyInput | ArticleLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleLike update
   */
  export type ArticleLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleLike.
     */
    data: XOR<ArticleLikeUpdateInput, ArticleLikeUncheckedUpdateInput>
    /**
     * Choose, which ArticleLike to update.
     */
    where: ArticleLikeWhereUniqueInput
  }

  /**
   * ArticleLike updateMany
   */
  export type ArticleLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleLikes.
     */
    data: XOR<ArticleLikeUpdateManyMutationInput, ArticleLikeUncheckedUpdateManyInput>
    /**
     * Filter which ArticleLikes to update
     */
    where?: ArticleLikeWhereInput
    /**
     * Limit how many ArticleLikes to update.
     */
    limit?: number
  }

  /**
   * ArticleLike upsert
   */
  export type ArticleLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleLike to update in case it exists.
     */
    where: ArticleLikeWhereUniqueInput
    /**
     * In case the ArticleLike found by the `where` argument doesn't exist, create a new ArticleLike with this data.
     */
    create: XOR<ArticleLikeCreateInput, ArticleLikeUncheckedCreateInput>
    /**
     * In case the ArticleLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleLikeUpdateInput, ArticleLikeUncheckedUpdateInput>
  }

  /**
   * ArticleLike delete
   */
  export type ArticleLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter which ArticleLike to delete.
     */
    where: ArticleLikeWhereUniqueInput
  }

  /**
   * ArticleLike deleteMany
   */
  export type ArticleLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleLikes to delete
     */
    where?: ArticleLikeWhereInput
    /**
     * Limit how many ArticleLikes to delete.
     */
    limit?: number
  }

  /**
   * ArticleLike without action
   */
  export type ArticleLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
  }


  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id: bigint | null
  }

  export type CommunityMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: bigint
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | Community$articleArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>



  export type CommunitySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | Community$articleArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends Community$articleArgs<ExtArgs> = {}>(args?: Subset<T, Community$articleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'BigInt'>
    readonly name: FieldRef<"Community", 'String'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updatedAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.article
   */
  export type Community$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    price: number | null
    authorId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: bigint | null
    price: number | null
    authorId: bigint | null
  }

  export type EventMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    venueName: string | null
    venueRoadAddress: string | null
    venueJibunAddress: string | null
    venueDetailAddress: string | null
    price: number | null
    link: string | null
    description: string | null
    authorId: bigint | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    venueName: string | null
    venueRoadAddress: string | null
    venueJibunAddress: string | null
    venueDetailAddress: string | null
    price: number | null
    link: string | null
    description: string | null
    authorId: bigint | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    startDate: number
    endDate: number
    venueName: number
    venueRoadAddress: number
    venueJibunAddress: number
    venueDetailAddress: number
    price: number
    link: number
    description: number
    authorId: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    price?: true
    authorId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    price?: true
    authorId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    venueName?: true
    venueRoadAddress?: true
    venueJibunAddress?: true
    venueDetailAddress?: true
    price?: true
    link?: true
    description?: true
    authorId?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    venueName?: true
    venueRoadAddress?: true
    venueJibunAddress?: true
    venueDetailAddress?: true
    price?: true
    link?: true
    description?: true
    authorId?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    venueName?: true
    venueRoadAddress?: true
    venueJibunAddress?: true
    venueDetailAddress?: true
    price?: true
    link?: true
    description?: true
    authorId?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: bigint
    title: string
    startDate: Date
    endDate: Date
    venueName: string | null
    venueRoadAddress: string | null
    venueJibunAddress: string | null
    venueDetailAddress: string | null
    price: number
    link: string | null
    description: string | null
    authorId: bigint
    category: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    venueName?: boolean
    venueRoadAddress?: boolean
    venueJibunAddress?: boolean
    venueDetailAddress?: boolean
    price?: boolean
    link?: boolean
    description?: boolean
    authorId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    eventImage?: boolean | Event$eventImageArgs<ExtArgs>
    eventScrap?: boolean | Event$eventScrapArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    venueName?: boolean
    venueRoadAddress?: boolean
    venueJibunAddress?: boolean
    venueDetailAddress?: boolean
    price?: boolean
    link?: boolean
    description?: boolean
    authorId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "startDate" | "endDate" | "venueName" | "venueRoadAddress" | "venueJibunAddress" | "venueDetailAddress" | "price" | "link" | "description" | "authorId" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    eventImage?: boolean | Event$eventImageArgs<ExtArgs>
    eventScrap?: boolean | Event$eventScrapArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      eventImage: Prisma.$EventImagePayload<ExtArgs>[]
      eventScrap: Prisma.$EventScrapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      startDate: Date
      endDate: Date
      venueName: string | null
      venueRoadAddress: string | null
      venueJibunAddress: string | null
      venueDetailAddress: string | null
      price: number
      link: string | null
      description: string | null
      authorId: bigint
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventImage<T extends Event$eventImageArgs<ExtArgs> = {}>(args?: Subset<T, Event$eventImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventScrap<T extends Event$eventScrapArgs<ExtArgs> = {}>(args?: Subset<T, Event$eventScrapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'BigInt'>
    readonly title: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly venueName: FieldRef<"Event", 'String'>
    readonly venueRoadAddress: FieldRef<"Event", 'String'>
    readonly venueJibunAddress: FieldRef<"Event", 'String'>
    readonly venueDetailAddress: FieldRef<"Event", 'String'>
    readonly price: FieldRef<"Event", 'Int'>
    readonly link: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly authorId: FieldRef<"Event", 'BigInt'>
    readonly category: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.eventImage
   */
  export type Event$eventImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    where?: EventImageWhereInput
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    cursor?: EventImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * Event.eventScrap
   */
  export type Event$eventScrapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    where?: EventScrapWhereInput
    orderBy?: EventScrapOrderByWithRelationInput | EventScrapOrderByWithRelationInput[]
    cursor?: EventScrapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScrapScalarFieldEnum | EventScrapScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventImage
   */

  export type AggregateEventImage = {
    _count: EventImageCountAggregateOutputType | null
    _avg: EventImageAvgAggregateOutputType | null
    _sum: EventImageSumAggregateOutputType | null
    _min: EventImageMinAggregateOutputType | null
    _max: EventImageMaxAggregateOutputType | null
  }

  export type EventImageAvgAggregateOutputType = {
    eventId: number | null
    order: number | null
  }

  export type EventImageSumAggregateOutputType = {
    eventId: bigint | null
    order: number | null
  }

  export type EventImageMinAggregateOutputType = {
    eventId: bigint | null
    imageUrl: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventImageMaxAggregateOutputType = {
    eventId: bigint | null
    imageUrl: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventImageCountAggregateOutputType = {
    eventId: number
    imageUrl: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventImageAvgAggregateInputType = {
    eventId?: true
    order?: true
  }

  export type EventImageSumAggregateInputType = {
    eventId?: true
    order?: true
  }

  export type EventImageMinAggregateInputType = {
    eventId?: true
    imageUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventImageMaxAggregateInputType = {
    eventId?: true
    imageUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventImageCountAggregateInputType = {
    eventId?: true
    imageUrl?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventImage to aggregate.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventImages
    **/
    _count?: true | EventImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventImageMaxAggregateInputType
  }

  export type GetEventImageAggregateType<T extends EventImageAggregateArgs> = {
        [P in keyof T & keyof AggregateEventImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventImage[P]>
      : GetScalarType<T[P], AggregateEventImage[P]>
  }




  export type EventImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventImageWhereInput
    orderBy?: EventImageOrderByWithAggregationInput | EventImageOrderByWithAggregationInput[]
    by: EventImageScalarFieldEnum[] | EventImageScalarFieldEnum
    having?: EventImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventImageCountAggregateInputType | true
    _avg?: EventImageAvgAggregateInputType
    _sum?: EventImageSumAggregateInputType
    _min?: EventImageMinAggregateInputType
    _max?: EventImageMaxAggregateInputType
  }

  export type EventImageGroupByOutputType = {
    eventId: bigint
    imageUrl: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: EventImageCountAggregateOutputType | null
    _avg: EventImageAvgAggregateOutputType | null
    _sum: EventImageSumAggregateOutputType | null
    _min: EventImageMinAggregateOutputType | null
    _max: EventImageMaxAggregateOutputType | null
  }

  type GetEventImageGroupByPayload<T extends EventImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventImageGroupByOutputType[P]>
            : GetScalarType<T[P], EventImageGroupByOutputType[P]>
        }
      >
    >


  export type EventImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    imageUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventImage"]>



  export type EventImageSelectScalar = {
    eventId?: boolean
    imageUrl?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "imageUrl" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["eventImage"]>
  export type EventImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventImage"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: bigint
      imageUrl: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventImage"]>
    composites: {}
  }

  type EventImageGetPayload<S extends boolean | null | undefined | EventImageDefaultArgs> = $Result.GetResult<Prisma.$EventImagePayload, S>

  type EventImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventImageCountAggregateInputType | true
    }

  export interface EventImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventImage'], meta: { name: 'EventImage' } }
    /**
     * Find zero or one EventImage that matches the filter.
     * @param {EventImageFindUniqueArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventImageFindUniqueArgs>(args: SelectSubset<T, EventImageFindUniqueArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventImageFindUniqueOrThrowArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventImageFindUniqueOrThrowArgs>(args: SelectSubset<T, EventImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageFindFirstArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventImageFindFirstArgs>(args?: SelectSubset<T, EventImageFindFirstArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageFindFirstOrThrowArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventImageFindFirstOrThrowArgs>(args?: SelectSubset<T, EventImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventImages
     * const eventImages = await prisma.eventImage.findMany()
     * 
     * // Get first 10 EventImages
     * const eventImages = await prisma.eventImage.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const eventImageWithEventIdOnly = await prisma.eventImage.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends EventImageFindManyArgs>(args?: SelectSubset<T, EventImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventImage.
     * @param {EventImageCreateArgs} args - Arguments to create a EventImage.
     * @example
     * // Create one EventImage
     * const EventImage = await prisma.eventImage.create({
     *   data: {
     *     // ... data to create a EventImage
     *   }
     * })
     * 
     */
    create<T extends EventImageCreateArgs>(args: SelectSubset<T, EventImageCreateArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventImages.
     * @param {EventImageCreateManyArgs} args - Arguments to create many EventImages.
     * @example
     * // Create many EventImages
     * const eventImage = await prisma.eventImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventImageCreateManyArgs>(args?: SelectSubset<T, EventImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventImage.
     * @param {EventImageDeleteArgs} args - Arguments to delete one EventImage.
     * @example
     * // Delete one EventImage
     * const EventImage = await prisma.eventImage.delete({
     *   where: {
     *     // ... filter to delete one EventImage
     *   }
     * })
     * 
     */
    delete<T extends EventImageDeleteArgs>(args: SelectSubset<T, EventImageDeleteArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventImage.
     * @param {EventImageUpdateArgs} args - Arguments to update one EventImage.
     * @example
     * // Update one EventImage
     * const eventImage = await prisma.eventImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventImageUpdateArgs>(args: SelectSubset<T, EventImageUpdateArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventImages.
     * @param {EventImageDeleteManyArgs} args - Arguments to filter EventImages to delete.
     * @example
     * // Delete a few EventImages
     * const { count } = await prisma.eventImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventImageDeleteManyArgs>(args?: SelectSubset<T, EventImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventImages
     * const eventImage = await prisma.eventImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventImageUpdateManyArgs>(args: SelectSubset<T, EventImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventImage.
     * @param {EventImageUpsertArgs} args - Arguments to update or create a EventImage.
     * @example
     * // Update or create a EventImage
     * const eventImage = await prisma.eventImage.upsert({
     *   create: {
     *     // ... data to create a EventImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventImage we want to update
     *   }
     * })
     */
    upsert<T extends EventImageUpsertArgs>(args: SelectSubset<T, EventImageUpsertArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageCountArgs} args - Arguments to filter EventImages to count.
     * @example
     * // Count the number of EventImages
     * const count = await prisma.eventImage.count({
     *   where: {
     *     // ... the filter for the EventImages we want to count
     *   }
     * })
    **/
    count<T extends EventImageCountArgs>(
      args?: Subset<T, EventImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventImageAggregateArgs>(args: Subset<T, EventImageAggregateArgs>): Prisma.PrismaPromise<GetEventImageAggregateType<T>>

    /**
     * Group by EventImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventImageGroupByArgs['orderBy'] }
        : { orderBy?: EventImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventImage model
   */
  readonly fields: EventImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventImage model
   */
  interface EventImageFieldRefs {
    readonly eventId: FieldRef<"EventImage", 'BigInt'>
    readonly imageUrl: FieldRef<"EventImage", 'String'>
    readonly order: FieldRef<"EventImage", 'Int'>
    readonly createdAt: FieldRef<"EventImage", 'DateTime'>
    readonly updatedAt: FieldRef<"EventImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventImage findUnique
   */
  export type EventImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage findUniqueOrThrow
   */
  export type EventImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage findFirst
   */
  export type EventImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventImages.
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventImages.
     */
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * EventImage findFirstOrThrow
   */
  export type EventImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventImages.
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventImages.
     */
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * EventImage findMany
   */
  export type EventImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImages to fetch.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventImages.
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * EventImage create
   */
  export type EventImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * The data needed to create a EventImage.
     */
    data: XOR<EventImageCreateInput, EventImageUncheckedCreateInput>
  }

  /**
   * EventImage createMany
   */
  export type EventImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventImages.
     */
    data: EventImageCreateManyInput | EventImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventImage update
   */
  export type EventImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * The data needed to update a EventImage.
     */
    data: XOR<EventImageUpdateInput, EventImageUncheckedUpdateInput>
    /**
     * Choose, which EventImage to update.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage updateMany
   */
  export type EventImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventImages.
     */
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyInput>
    /**
     * Filter which EventImages to update
     */
    where?: EventImageWhereInput
    /**
     * Limit how many EventImages to update.
     */
    limit?: number
  }

  /**
   * EventImage upsert
   */
  export type EventImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * The filter to search for the EventImage to update in case it exists.
     */
    where: EventImageWhereUniqueInput
    /**
     * In case the EventImage found by the `where` argument doesn't exist, create a new EventImage with this data.
     */
    create: XOR<EventImageCreateInput, EventImageUncheckedCreateInput>
    /**
     * In case the EventImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventImageUpdateInput, EventImageUncheckedUpdateInput>
  }

  /**
   * EventImage delete
   */
  export type EventImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter which EventImage to delete.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage deleteMany
   */
  export type EventImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventImages to delete
     */
    where?: EventImageWhereInput
    /**
     * Limit how many EventImages to delete.
     */
    limit?: number
  }

  /**
   * EventImage without action
   */
  export type EventImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
  }


  /**
   * Model EventScrap
   */

  export type AggregateEventScrap = {
    _count: EventScrapCountAggregateOutputType | null
    _avg: EventScrapAvgAggregateOutputType | null
    _sum: EventScrapSumAggregateOutputType | null
    _min: EventScrapMinAggregateOutputType | null
    _max: EventScrapMaxAggregateOutputType | null
  }

  export type EventScrapAvgAggregateOutputType = {
    userId: number | null
    eventId: number | null
  }

  export type EventScrapSumAggregateOutputType = {
    userId: bigint | null
    eventId: bigint | null
  }

  export type EventScrapMinAggregateOutputType = {
    userId: bigint | null
    eventId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventScrapMaxAggregateOutputType = {
    userId: bigint | null
    eventId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventScrapCountAggregateOutputType = {
    userId: number
    eventId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventScrapAvgAggregateInputType = {
    userId?: true
    eventId?: true
  }

  export type EventScrapSumAggregateInputType = {
    userId?: true
    eventId?: true
  }

  export type EventScrapMinAggregateInputType = {
    userId?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventScrapMaxAggregateInputType = {
    userId?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventScrapCountAggregateInputType = {
    userId?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventScrapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventScrap to aggregate.
     */
    where?: EventScrapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScraps to fetch.
     */
    orderBy?: EventScrapOrderByWithRelationInput | EventScrapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventScrapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScraps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScraps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventScraps
    **/
    _count?: true | EventScrapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventScrapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventScrapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventScrapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventScrapMaxAggregateInputType
  }

  export type GetEventScrapAggregateType<T extends EventScrapAggregateArgs> = {
        [P in keyof T & keyof AggregateEventScrap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventScrap[P]>
      : GetScalarType<T[P], AggregateEventScrap[P]>
  }




  export type EventScrapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScrapWhereInput
    orderBy?: EventScrapOrderByWithAggregationInput | EventScrapOrderByWithAggregationInput[]
    by: EventScrapScalarFieldEnum[] | EventScrapScalarFieldEnum
    having?: EventScrapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventScrapCountAggregateInputType | true
    _avg?: EventScrapAvgAggregateInputType
    _sum?: EventScrapSumAggregateInputType
    _min?: EventScrapMinAggregateInputType
    _max?: EventScrapMaxAggregateInputType
  }

  export type EventScrapGroupByOutputType = {
    userId: bigint
    eventId: bigint
    createdAt: Date
    updatedAt: Date
    _count: EventScrapCountAggregateOutputType | null
    _avg: EventScrapAvgAggregateOutputType | null
    _sum: EventScrapSumAggregateOutputType | null
    _min: EventScrapMinAggregateOutputType | null
    _max: EventScrapMaxAggregateOutputType | null
  }

  type GetEventScrapGroupByPayload<T extends EventScrapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventScrapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventScrapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventScrapGroupByOutputType[P]>
            : GetScalarType<T[P], EventScrapGroupByOutputType[P]>
        }
      >
    >


  export type EventScrapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventScrap"]>



  export type EventScrapSelectScalar = {
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventScrapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "eventId" | "createdAt" | "updatedAt", ExtArgs["result"]["eventScrap"]>
  export type EventScrapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventScrapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventScrap"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: bigint
      eventId: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventScrap"]>
    composites: {}
  }

  type EventScrapGetPayload<S extends boolean | null | undefined | EventScrapDefaultArgs> = $Result.GetResult<Prisma.$EventScrapPayload, S>

  type EventScrapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventScrapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventScrapCountAggregateInputType | true
    }

  export interface EventScrapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventScrap'], meta: { name: 'EventScrap' } }
    /**
     * Find zero or one EventScrap that matches the filter.
     * @param {EventScrapFindUniqueArgs} args - Arguments to find a EventScrap
     * @example
     * // Get one EventScrap
     * const eventScrap = await prisma.eventScrap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventScrapFindUniqueArgs>(args: SelectSubset<T, EventScrapFindUniqueArgs<ExtArgs>>): Prisma__EventScrapClient<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventScrap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventScrapFindUniqueOrThrowArgs} args - Arguments to find a EventScrap
     * @example
     * // Get one EventScrap
     * const eventScrap = await prisma.eventScrap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventScrapFindUniqueOrThrowArgs>(args: SelectSubset<T, EventScrapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventScrapClient<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventScrap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScrapFindFirstArgs} args - Arguments to find a EventScrap
     * @example
     * // Get one EventScrap
     * const eventScrap = await prisma.eventScrap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventScrapFindFirstArgs>(args?: SelectSubset<T, EventScrapFindFirstArgs<ExtArgs>>): Prisma__EventScrapClient<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventScrap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScrapFindFirstOrThrowArgs} args - Arguments to find a EventScrap
     * @example
     * // Get one EventScrap
     * const eventScrap = await prisma.eventScrap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventScrapFindFirstOrThrowArgs>(args?: SelectSubset<T, EventScrapFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventScrapClient<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventScraps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScrapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventScraps
     * const eventScraps = await prisma.eventScrap.findMany()
     * 
     * // Get first 10 EventScraps
     * const eventScraps = await prisma.eventScrap.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const eventScrapWithUserIdOnly = await prisma.eventScrap.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends EventScrapFindManyArgs>(args?: SelectSubset<T, EventScrapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventScrap.
     * @param {EventScrapCreateArgs} args - Arguments to create a EventScrap.
     * @example
     * // Create one EventScrap
     * const EventScrap = await prisma.eventScrap.create({
     *   data: {
     *     // ... data to create a EventScrap
     *   }
     * })
     * 
     */
    create<T extends EventScrapCreateArgs>(args: SelectSubset<T, EventScrapCreateArgs<ExtArgs>>): Prisma__EventScrapClient<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventScraps.
     * @param {EventScrapCreateManyArgs} args - Arguments to create many EventScraps.
     * @example
     * // Create many EventScraps
     * const eventScrap = await prisma.eventScrap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventScrapCreateManyArgs>(args?: SelectSubset<T, EventScrapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventScrap.
     * @param {EventScrapDeleteArgs} args - Arguments to delete one EventScrap.
     * @example
     * // Delete one EventScrap
     * const EventScrap = await prisma.eventScrap.delete({
     *   where: {
     *     // ... filter to delete one EventScrap
     *   }
     * })
     * 
     */
    delete<T extends EventScrapDeleteArgs>(args: SelectSubset<T, EventScrapDeleteArgs<ExtArgs>>): Prisma__EventScrapClient<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventScrap.
     * @param {EventScrapUpdateArgs} args - Arguments to update one EventScrap.
     * @example
     * // Update one EventScrap
     * const eventScrap = await prisma.eventScrap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventScrapUpdateArgs>(args: SelectSubset<T, EventScrapUpdateArgs<ExtArgs>>): Prisma__EventScrapClient<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventScraps.
     * @param {EventScrapDeleteManyArgs} args - Arguments to filter EventScraps to delete.
     * @example
     * // Delete a few EventScraps
     * const { count } = await prisma.eventScrap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventScrapDeleteManyArgs>(args?: SelectSubset<T, EventScrapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventScraps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScrapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventScraps
     * const eventScrap = await prisma.eventScrap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventScrapUpdateManyArgs>(args: SelectSubset<T, EventScrapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventScrap.
     * @param {EventScrapUpsertArgs} args - Arguments to update or create a EventScrap.
     * @example
     * // Update or create a EventScrap
     * const eventScrap = await prisma.eventScrap.upsert({
     *   create: {
     *     // ... data to create a EventScrap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventScrap we want to update
     *   }
     * })
     */
    upsert<T extends EventScrapUpsertArgs>(args: SelectSubset<T, EventScrapUpsertArgs<ExtArgs>>): Prisma__EventScrapClient<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventScraps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScrapCountArgs} args - Arguments to filter EventScraps to count.
     * @example
     * // Count the number of EventScraps
     * const count = await prisma.eventScrap.count({
     *   where: {
     *     // ... the filter for the EventScraps we want to count
     *   }
     * })
    **/
    count<T extends EventScrapCountArgs>(
      args?: Subset<T, EventScrapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventScrapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventScrap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScrapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventScrapAggregateArgs>(args: Subset<T, EventScrapAggregateArgs>): Prisma.PrismaPromise<GetEventScrapAggregateType<T>>

    /**
     * Group by EventScrap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScrapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventScrapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventScrapGroupByArgs['orderBy'] }
        : { orderBy?: EventScrapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventScrapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventScrapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventScrap model
   */
  readonly fields: EventScrapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventScrap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventScrapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventScrap model
   */
  interface EventScrapFieldRefs {
    readonly userId: FieldRef<"EventScrap", 'BigInt'>
    readonly eventId: FieldRef<"EventScrap", 'BigInt'>
    readonly createdAt: FieldRef<"EventScrap", 'DateTime'>
    readonly updatedAt: FieldRef<"EventScrap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventScrap findUnique
   */
  export type EventScrapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    /**
     * Filter, which EventScrap to fetch.
     */
    where: EventScrapWhereUniqueInput
  }

  /**
   * EventScrap findUniqueOrThrow
   */
  export type EventScrapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    /**
     * Filter, which EventScrap to fetch.
     */
    where: EventScrapWhereUniqueInput
  }

  /**
   * EventScrap findFirst
   */
  export type EventScrapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    /**
     * Filter, which EventScrap to fetch.
     */
    where?: EventScrapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScraps to fetch.
     */
    orderBy?: EventScrapOrderByWithRelationInput | EventScrapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventScraps.
     */
    cursor?: EventScrapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScraps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScraps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventScraps.
     */
    distinct?: EventScrapScalarFieldEnum | EventScrapScalarFieldEnum[]
  }

  /**
   * EventScrap findFirstOrThrow
   */
  export type EventScrapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    /**
     * Filter, which EventScrap to fetch.
     */
    where?: EventScrapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScraps to fetch.
     */
    orderBy?: EventScrapOrderByWithRelationInput | EventScrapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventScraps.
     */
    cursor?: EventScrapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScraps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScraps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventScraps.
     */
    distinct?: EventScrapScalarFieldEnum | EventScrapScalarFieldEnum[]
  }

  /**
   * EventScrap findMany
   */
  export type EventScrapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    /**
     * Filter, which EventScraps to fetch.
     */
    where?: EventScrapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScraps to fetch.
     */
    orderBy?: EventScrapOrderByWithRelationInput | EventScrapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventScraps.
     */
    cursor?: EventScrapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScraps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScraps.
     */
    skip?: number
    distinct?: EventScrapScalarFieldEnum | EventScrapScalarFieldEnum[]
  }

  /**
   * EventScrap create
   */
  export type EventScrapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    /**
     * The data needed to create a EventScrap.
     */
    data: XOR<EventScrapCreateInput, EventScrapUncheckedCreateInput>
  }

  /**
   * EventScrap createMany
   */
  export type EventScrapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventScraps.
     */
    data: EventScrapCreateManyInput | EventScrapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventScrap update
   */
  export type EventScrapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    /**
     * The data needed to update a EventScrap.
     */
    data: XOR<EventScrapUpdateInput, EventScrapUncheckedUpdateInput>
    /**
     * Choose, which EventScrap to update.
     */
    where: EventScrapWhereUniqueInput
  }

  /**
   * EventScrap updateMany
   */
  export type EventScrapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventScraps.
     */
    data: XOR<EventScrapUpdateManyMutationInput, EventScrapUncheckedUpdateManyInput>
    /**
     * Filter which EventScraps to update
     */
    where?: EventScrapWhereInput
    /**
     * Limit how many EventScraps to update.
     */
    limit?: number
  }

  /**
   * EventScrap upsert
   */
  export type EventScrapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    /**
     * The filter to search for the EventScrap to update in case it exists.
     */
    where: EventScrapWhereUniqueInput
    /**
     * In case the EventScrap found by the `where` argument doesn't exist, create a new EventScrap with this data.
     */
    create: XOR<EventScrapCreateInput, EventScrapUncheckedCreateInput>
    /**
     * In case the EventScrap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventScrapUpdateInput, EventScrapUncheckedUpdateInput>
  }

  /**
   * EventScrap delete
   */
  export type EventScrapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    /**
     * Filter which EventScrap to delete.
     */
    where: EventScrapWhereUniqueInput
  }

  /**
   * EventScrap deleteMany
   */
  export type EventScrapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventScraps to delete
     */
    where?: EventScrapWhereInput
    /**
     * Limit how many EventScraps to delete.
     */
    limit?: number
  }

  /**
   * EventScrap without action
   */
  export type EventScrapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
  }


  /**
   * Model Term
   */

  export type AggregateTerm = {
    _count: TermCountAggregateOutputType | null
    _avg: TermAvgAggregateOutputType | null
    _sum: TermSumAggregateOutputType | null
    _min: TermMinAggregateOutputType | null
    _max: TermMaxAggregateOutputType | null
  }

  export type TermAvgAggregateOutputType = {
    id: number | null
  }

  export type TermSumAggregateOutputType = {
    id: bigint | null
  }

  export type TermMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    content: string | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    content: string | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermCountAggregateOutputType = {
    id: number
    title: number
    content: number
    isRequired: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TermAvgAggregateInputType = {
    id?: true
  }

  export type TermSumAggregateInputType = {
    id?: true
  }

  export type TermMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Term to aggregate.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Terms
    **/
    _count?: true | TermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TermAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TermSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermMaxAggregateInputType
  }

  export type GetTermAggregateType<T extends TermAggregateArgs> = {
        [P in keyof T & keyof AggregateTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerm[P]>
      : GetScalarType<T[P], AggregateTerm[P]>
  }




  export type TermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermWhereInput
    orderBy?: TermOrderByWithAggregationInput | TermOrderByWithAggregationInput[]
    by: TermScalarFieldEnum[] | TermScalarFieldEnum
    having?: TermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermCountAggregateInputType | true
    _avg?: TermAvgAggregateInputType
    _sum?: TermSumAggregateInputType
    _min?: TermMinAggregateInputType
    _max?: TermMaxAggregateInputType
  }

  export type TermGroupByOutputType = {
    id: bigint
    title: string
    content: string
    isRequired: boolean
    createdAt: Date
    updatedAt: Date
    _count: TermCountAggregateOutputType | null
    _avg: TermAvgAggregateOutputType | null
    _sum: TermSumAggregateOutputType | null
    _min: TermMinAggregateOutputType | null
    _max: TermMaxAggregateOutputType | null
  }

  type GetTermGroupByPayload<T extends TermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermGroupByOutputType[P]>
            : GetScalarType<T[P], TermGroupByOutputType[P]>
        }
      >
    >


  export type TermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userTerm?: boolean | Term$userTermArgs<ExtArgs>
    _count?: boolean | TermCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["term"]>



  export type TermSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TermOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "isRequired" | "createdAt" | "updatedAt", ExtArgs["result"]["term"]>
  export type TermInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTerm?: boolean | Term$userTermArgs<ExtArgs>
    _count?: boolean | TermCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Term"
    objects: {
      userTerm: Prisma.$UserTermPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      content: string
      isRequired: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["term"]>
    composites: {}
  }

  type TermGetPayload<S extends boolean | null | undefined | TermDefaultArgs> = $Result.GetResult<Prisma.$TermPayload, S>

  type TermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermCountAggregateInputType | true
    }

  export interface TermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Term'], meta: { name: 'Term' } }
    /**
     * Find zero or one Term that matches the filter.
     * @param {TermFindUniqueArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermFindUniqueArgs>(args: SelectSubset<T, TermFindUniqueArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Term that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TermFindUniqueOrThrowArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermFindUniqueOrThrowArgs>(args: SelectSubset<T, TermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Term that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindFirstArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermFindFirstArgs>(args?: SelectSubset<T, TermFindFirstArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Term that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindFirstOrThrowArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermFindFirstOrThrowArgs>(args?: SelectSubset<T, TermFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Terms
     * const terms = await prisma.term.findMany()
     * 
     * // Get first 10 Terms
     * const terms = await prisma.term.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termWithIdOnly = await prisma.term.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermFindManyArgs>(args?: SelectSubset<T, TermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Term.
     * @param {TermCreateArgs} args - Arguments to create a Term.
     * @example
     * // Create one Term
     * const Term = await prisma.term.create({
     *   data: {
     *     // ... data to create a Term
     *   }
     * })
     * 
     */
    create<T extends TermCreateArgs>(args: SelectSubset<T, TermCreateArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Terms.
     * @param {TermCreateManyArgs} args - Arguments to create many Terms.
     * @example
     * // Create many Terms
     * const term = await prisma.term.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermCreateManyArgs>(args?: SelectSubset<T, TermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Term.
     * @param {TermDeleteArgs} args - Arguments to delete one Term.
     * @example
     * // Delete one Term
     * const Term = await prisma.term.delete({
     *   where: {
     *     // ... filter to delete one Term
     *   }
     * })
     * 
     */
    delete<T extends TermDeleteArgs>(args: SelectSubset<T, TermDeleteArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Term.
     * @param {TermUpdateArgs} args - Arguments to update one Term.
     * @example
     * // Update one Term
     * const term = await prisma.term.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermUpdateArgs>(args: SelectSubset<T, TermUpdateArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Terms.
     * @param {TermDeleteManyArgs} args - Arguments to filter Terms to delete.
     * @example
     * // Delete a few Terms
     * const { count } = await prisma.term.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermDeleteManyArgs>(args?: SelectSubset<T, TermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Terms
     * const term = await prisma.term.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermUpdateManyArgs>(args: SelectSubset<T, TermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Term.
     * @param {TermUpsertArgs} args - Arguments to update or create a Term.
     * @example
     * // Update or create a Term
     * const term = await prisma.term.upsert({
     *   create: {
     *     // ... data to create a Term
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Term we want to update
     *   }
     * })
     */
    upsert<T extends TermUpsertArgs>(args: SelectSubset<T, TermUpsertArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermCountArgs} args - Arguments to filter Terms to count.
     * @example
     * // Count the number of Terms
     * const count = await prisma.term.count({
     *   where: {
     *     // ... the filter for the Terms we want to count
     *   }
     * })
    **/
    count<T extends TermCountArgs>(
      args?: Subset<T, TermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Term.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TermAggregateArgs>(args: Subset<T, TermAggregateArgs>): Prisma.PrismaPromise<GetTermAggregateType<T>>

    /**
     * Group by Term.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermGroupByArgs['orderBy'] }
        : { orderBy?: TermGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Term model
   */
  readonly fields: TermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Term.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTerm<T extends Term$userTermArgs<ExtArgs> = {}>(args?: Subset<T, Term$userTermArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Term model
   */
  interface TermFieldRefs {
    readonly id: FieldRef<"Term", 'BigInt'>
    readonly title: FieldRef<"Term", 'String'>
    readonly content: FieldRef<"Term", 'String'>
    readonly isRequired: FieldRef<"Term", 'Boolean'>
    readonly createdAt: FieldRef<"Term", 'DateTime'>
    readonly updatedAt: FieldRef<"Term", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Term findUnique
   */
  export type TermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term findUniqueOrThrow
   */
  export type TermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term findFirst
   */
  export type TermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term findFirstOrThrow
   */
  export type TermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term findMany
   */
  export type TermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter, which Terms to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term create
   */
  export type TermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * The data needed to create a Term.
     */
    data: XOR<TermCreateInput, TermUncheckedCreateInput>
  }

  /**
   * Term createMany
   */
  export type TermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Terms.
     */
    data: TermCreateManyInput | TermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Term update
   */
  export type TermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * The data needed to update a Term.
     */
    data: XOR<TermUpdateInput, TermUncheckedUpdateInput>
    /**
     * Choose, which Term to update.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term updateMany
   */
  export type TermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Terms.
     */
    data: XOR<TermUpdateManyMutationInput, TermUncheckedUpdateManyInput>
    /**
     * Filter which Terms to update
     */
    where?: TermWhereInput
    /**
     * Limit how many Terms to update.
     */
    limit?: number
  }

  /**
   * Term upsert
   */
  export type TermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * The filter to search for the Term to update in case it exists.
     */
    where: TermWhereUniqueInput
    /**
     * In case the Term found by the `where` argument doesn't exist, create a new Term with this data.
     */
    create: XOR<TermCreateInput, TermUncheckedCreateInput>
    /**
     * In case the Term was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermUpdateInput, TermUncheckedUpdateInput>
  }

  /**
   * Term delete
   */
  export type TermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
    /**
     * Filter which Term to delete.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term deleteMany
   */
  export type TermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terms to delete
     */
    where?: TermWhereInput
    /**
     * Limit how many Terms to delete.
     */
    limit?: number
  }

  /**
   * Term.userTerm
   */
  export type Term$userTermArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    where?: UserTermWhereInput
    orderBy?: UserTermOrderByWithRelationInput | UserTermOrderByWithRelationInput[]
    cursor?: UserTermWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTermScalarFieldEnum | UserTermScalarFieldEnum[]
  }

  /**
   * Term without action
   */
  export type TermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Term
     */
    omit?: TermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    nickname: string | null
    birthdate: Date | null
    gender: string | null
    phoneNumber: string | null
    profileImage: string | null
    role: string | null
    oauthProvider: string | null
    oauthId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    nickname: string | null
    birthdate: Date | null
    gender: string | null
    phoneNumber: string | null
    profileImage: string | null
    role: string | null
    oauthProvider: string | null
    oauthId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    nickname: number
    birthdate: number
    gender: number
    phoneNumber: number
    profileImage: number
    role: number
    oauthProvider: number
    oauthId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    birthdate?: true
    gender?: true
    phoneNumber?: true
    profileImage?: true
    role?: true
    oauthProvider?: true
    oauthId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    birthdate?: true
    gender?: true
    phoneNumber?: true
    profileImage?: true
    role?: true
    oauthProvider?: true
    oauthId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    birthdate?: true
    gender?: true
    phoneNumber?: true
    profileImage?: true
    role?: true
    oauthProvider?: true
    oauthId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    name: string | null
    nickname: string
    birthdate: Date | null
    gender: string | null
    phoneNumber: string | null
    profileImage: string | null
    role: string
    oauthProvider: string | null
    oauthId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickname?: boolean
    birthdate?: boolean
    gender?: boolean
    phoneNumber?: boolean
    profileImage?: boolean
    role?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | User$articleArgs<ExtArgs>
    articleComment?: boolean | User$articleCommentArgs<ExtArgs>
    articleCommentLike?: boolean | User$articleCommentLikeArgs<ExtArgs>
    articleLike?: boolean | User$articleLikeArgs<ExtArgs>
    event?: boolean | User$eventArgs<ExtArgs>
    eventScrap?: boolean | User$eventScrapArgs<ExtArgs>
    userTerm?: boolean | User$userTermArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    nickname?: boolean
    birthdate?: boolean
    gender?: boolean
    phoneNumber?: boolean
    profileImage?: boolean
    role?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nickname" | "birthdate" | "gender" | "phoneNumber" | "profileImage" | "role" | "oauthProvider" | "oauthId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | User$articleArgs<ExtArgs>
    articleComment?: boolean | User$articleCommentArgs<ExtArgs>
    articleCommentLike?: boolean | User$articleCommentLikeArgs<ExtArgs>
    articleLike?: boolean | User$articleLikeArgs<ExtArgs>
    event?: boolean | User$eventArgs<ExtArgs>
    eventScrap?: boolean | User$eventScrapArgs<ExtArgs>
    userTerm?: boolean | User$userTermArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>[]
      articleComment: Prisma.$ArticleCommentPayload<ExtArgs>[]
      articleCommentLike: Prisma.$ArticleCommentLikePayload<ExtArgs>[]
      articleLike: Prisma.$ArticleLikePayload<ExtArgs>[]
      event: Prisma.$EventPayload<ExtArgs>[]
      eventScrap: Prisma.$EventScrapPayload<ExtArgs>[]
      userTerm: Prisma.$UserTermPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string | null
      nickname: string
      birthdate: Date | null
      gender: string | null
      phoneNumber: string | null
      profileImage: string | null
      role: string
      oauthProvider: string | null
      oauthId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends User$articleArgs<ExtArgs> = {}>(args?: Subset<T, User$articleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articleComment<T extends User$articleCommentArgs<ExtArgs> = {}>(args?: Subset<T, User$articleCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articleCommentLike<T extends User$articleCommentLikeArgs<ExtArgs> = {}>(args?: Subset<T, User$articleCommentLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCommentLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articleLike<T extends User$articleLikeArgs<ExtArgs> = {}>(args?: Subset<T, User$articleLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event<T extends User$eventArgs<ExtArgs> = {}>(args?: Subset<T, User$eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventScrap<T extends User$eventScrapArgs<ExtArgs> = {}>(args?: Subset<T, User$eventScrapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScrapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTerm<T extends User$userTermArgs<ExtArgs> = {}>(args?: Subset<T, User$userTermArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly name: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly oauthProvider: FieldRef<"User", 'String'>
    readonly oauthId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.article
   */
  export type User$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * User.articleComment
   */
  export type User$articleCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleComment
     */
    select?: ArticleCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleComment
     */
    omit?: ArticleCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentInclude<ExtArgs> | null
    where?: ArticleCommentWhereInput
    orderBy?: ArticleCommentOrderByWithRelationInput | ArticleCommentOrderByWithRelationInput[]
    cursor?: ArticleCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleCommentScalarFieldEnum | ArticleCommentScalarFieldEnum[]
  }

  /**
   * User.articleCommentLike
   */
  export type User$articleCommentLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCommentLike
     */
    select?: ArticleCommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleCommentLike
     */
    omit?: ArticleCommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleCommentLikeInclude<ExtArgs> | null
    where?: ArticleCommentLikeWhereInput
    orderBy?: ArticleCommentLikeOrderByWithRelationInput | ArticleCommentLikeOrderByWithRelationInput[]
    cursor?: ArticleCommentLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleCommentLikeScalarFieldEnum | ArticleCommentLikeScalarFieldEnum[]
  }

  /**
   * User.articleLike
   */
  export type User$articleLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    where?: ArticleLikeWhereInput
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    cursor?: ArticleLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * User.event
   */
  export type User$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.eventScrap
   */
  export type User$eventScrapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScrap
     */
    select?: EventScrapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScrap
     */
    omit?: EventScrapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScrapInclude<ExtArgs> | null
    where?: EventScrapWhereInput
    orderBy?: EventScrapOrderByWithRelationInput | EventScrapOrderByWithRelationInput[]
    cursor?: EventScrapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScrapScalarFieldEnum | EventScrapScalarFieldEnum[]
  }

  /**
   * User.userTerm
   */
  export type User$userTermArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    where?: UserTermWhereInput
    orderBy?: UserTermOrderByWithRelationInput | UserTermOrderByWithRelationInput[]
    cursor?: UserTermWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTermScalarFieldEnum | UserTermScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserTerm
   */

  export type AggregateUserTerm = {
    _count: UserTermCountAggregateOutputType | null
    _avg: UserTermAvgAggregateOutputType | null
    _sum: UserTermSumAggregateOutputType | null
    _min: UserTermMinAggregateOutputType | null
    _max: UserTermMaxAggregateOutputType | null
  }

  export type UserTermAvgAggregateOutputType = {
    userId: number | null
    termId: number | null
  }

  export type UserTermSumAggregateOutputType = {
    userId: bigint | null
    termId: bigint | null
  }

  export type UserTermMinAggregateOutputType = {
    userId: bigint | null
    termId: bigint | null
    isAccepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTermMaxAggregateOutputType = {
    userId: bigint | null
    termId: bigint | null
    isAccepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTermCountAggregateOutputType = {
    userId: number
    termId: number
    isAccepted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserTermAvgAggregateInputType = {
    userId?: true
    termId?: true
  }

  export type UserTermSumAggregateInputType = {
    userId?: true
    termId?: true
  }

  export type UserTermMinAggregateInputType = {
    userId?: true
    termId?: true
    isAccepted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTermMaxAggregateInputType = {
    userId?: true
    termId?: true
    isAccepted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTermCountAggregateInputType = {
    userId?: true
    termId?: true
    isAccepted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserTermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTerm to aggregate.
     */
    where?: UserTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTerms to fetch.
     */
    orderBy?: UserTermOrderByWithRelationInput | UserTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTerms
    **/
    _count?: true | UserTermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTermAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTermSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTermMaxAggregateInputType
  }

  export type GetUserTermAggregateType<T extends UserTermAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTerm[P]>
      : GetScalarType<T[P], AggregateUserTerm[P]>
  }




  export type UserTermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTermWhereInput
    orderBy?: UserTermOrderByWithAggregationInput | UserTermOrderByWithAggregationInput[]
    by: UserTermScalarFieldEnum[] | UserTermScalarFieldEnum
    having?: UserTermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTermCountAggregateInputType | true
    _avg?: UserTermAvgAggregateInputType
    _sum?: UserTermSumAggregateInputType
    _min?: UserTermMinAggregateInputType
    _max?: UserTermMaxAggregateInputType
  }

  export type UserTermGroupByOutputType = {
    userId: bigint
    termId: bigint
    isAccepted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserTermCountAggregateOutputType | null
    _avg: UserTermAvgAggregateOutputType | null
    _sum: UserTermSumAggregateOutputType | null
    _min: UserTermMinAggregateOutputType | null
    _max: UserTermMaxAggregateOutputType | null
  }

  type GetUserTermGroupByPayload<T extends UserTermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTermGroupByOutputType[P]>
            : GetScalarType<T[P], UserTermGroupByOutputType[P]>
        }
      >
    >


  export type UserTermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    termId?: boolean
    isAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    term?: boolean | TermDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTerm"]>



  export type UserTermSelectScalar = {
    userId?: boolean
    termId?: boolean
    isAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserTermOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "termId" | "isAccepted" | "createdAt" | "updatedAt", ExtArgs["result"]["userTerm"]>
  export type UserTermInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    term?: boolean | TermDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserTermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTerm"
    objects: {
      term: Prisma.$TermPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: bigint
      termId: bigint
      isAccepted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userTerm"]>
    composites: {}
  }

  type UserTermGetPayload<S extends boolean | null | undefined | UserTermDefaultArgs> = $Result.GetResult<Prisma.$UserTermPayload, S>

  type UserTermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTermCountAggregateInputType | true
    }

  export interface UserTermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTerm'], meta: { name: 'UserTerm' } }
    /**
     * Find zero or one UserTerm that matches the filter.
     * @param {UserTermFindUniqueArgs} args - Arguments to find a UserTerm
     * @example
     * // Get one UserTerm
     * const userTerm = await prisma.userTerm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTermFindUniqueArgs>(args: SelectSubset<T, UserTermFindUniqueArgs<ExtArgs>>): Prisma__UserTermClient<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTerm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTermFindUniqueOrThrowArgs} args - Arguments to find a UserTerm
     * @example
     * // Get one UserTerm
     * const userTerm = await prisma.userTerm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTermFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTermClient<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTerm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTermFindFirstArgs} args - Arguments to find a UserTerm
     * @example
     * // Get one UserTerm
     * const userTerm = await prisma.userTerm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTermFindFirstArgs>(args?: SelectSubset<T, UserTermFindFirstArgs<ExtArgs>>): Prisma__UserTermClient<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTerm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTermFindFirstOrThrowArgs} args - Arguments to find a UserTerm
     * @example
     * // Get one UserTerm
     * const userTerm = await prisma.userTerm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTermFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTermFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTermClient<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTerms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTerms
     * const userTerms = await prisma.userTerm.findMany()
     * 
     * // Get first 10 UserTerms
     * const userTerms = await prisma.userTerm.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userTermWithUserIdOnly = await prisma.userTerm.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserTermFindManyArgs>(args?: SelectSubset<T, UserTermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTerm.
     * @param {UserTermCreateArgs} args - Arguments to create a UserTerm.
     * @example
     * // Create one UserTerm
     * const UserTerm = await prisma.userTerm.create({
     *   data: {
     *     // ... data to create a UserTerm
     *   }
     * })
     * 
     */
    create<T extends UserTermCreateArgs>(args: SelectSubset<T, UserTermCreateArgs<ExtArgs>>): Prisma__UserTermClient<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTerms.
     * @param {UserTermCreateManyArgs} args - Arguments to create many UserTerms.
     * @example
     * // Create many UserTerms
     * const userTerm = await prisma.userTerm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTermCreateManyArgs>(args?: SelectSubset<T, UserTermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserTerm.
     * @param {UserTermDeleteArgs} args - Arguments to delete one UserTerm.
     * @example
     * // Delete one UserTerm
     * const UserTerm = await prisma.userTerm.delete({
     *   where: {
     *     // ... filter to delete one UserTerm
     *   }
     * })
     * 
     */
    delete<T extends UserTermDeleteArgs>(args: SelectSubset<T, UserTermDeleteArgs<ExtArgs>>): Prisma__UserTermClient<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTerm.
     * @param {UserTermUpdateArgs} args - Arguments to update one UserTerm.
     * @example
     * // Update one UserTerm
     * const userTerm = await prisma.userTerm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTermUpdateArgs>(args: SelectSubset<T, UserTermUpdateArgs<ExtArgs>>): Prisma__UserTermClient<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTerms.
     * @param {UserTermDeleteManyArgs} args - Arguments to filter UserTerms to delete.
     * @example
     * // Delete a few UserTerms
     * const { count } = await prisma.userTerm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTermDeleteManyArgs>(args?: SelectSubset<T, UserTermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTerms
     * const userTerm = await prisma.userTerm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTermUpdateManyArgs>(args: SelectSubset<T, UserTermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserTerm.
     * @param {UserTermUpsertArgs} args - Arguments to update or create a UserTerm.
     * @example
     * // Update or create a UserTerm
     * const userTerm = await prisma.userTerm.upsert({
     *   create: {
     *     // ... data to create a UserTerm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTerm we want to update
     *   }
     * })
     */
    upsert<T extends UserTermUpsertArgs>(args: SelectSubset<T, UserTermUpsertArgs<ExtArgs>>): Prisma__UserTermClient<$Result.GetResult<Prisma.$UserTermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTermCountArgs} args - Arguments to filter UserTerms to count.
     * @example
     * // Count the number of UserTerms
     * const count = await prisma.userTerm.count({
     *   where: {
     *     // ... the filter for the UserTerms we want to count
     *   }
     * })
    **/
    count<T extends UserTermCountArgs>(
      args?: Subset<T, UserTermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTermAggregateArgs>(args: Subset<T, UserTermAggregateArgs>): Prisma.PrismaPromise<GetUserTermAggregateType<T>>

    /**
     * Group by UserTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTermGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTermGroupByArgs['orderBy'] }
        : { orderBy?: UserTermGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTerm model
   */
  readonly fields: UserTermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTerm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    term<T extends TermDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TermDefaultArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTerm model
   */
  interface UserTermFieldRefs {
    readonly userId: FieldRef<"UserTerm", 'BigInt'>
    readonly termId: FieldRef<"UserTerm", 'BigInt'>
    readonly isAccepted: FieldRef<"UserTerm", 'Boolean'>
    readonly createdAt: FieldRef<"UserTerm", 'DateTime'>
    readonly updatedAt: FieldRef<"UserTerm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTerm findUnique
   */
  export type UserTermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    /**
     * Filter, which UserTerm to fetch.
     */
    where: UserTermWhereUniqueInput
  }

  /**
   * UserTerm findUniqueOrThrow
   */
  export type UserTermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    /**
     * Filter, which UserTerm to fetch.
     */
    where: UserTermWhereUniqueInput
  }

  /**
   * UserTerm findFirst
   */
  export type UserTermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    /**
     * Filter, which UserTerm to fetch.
     */
    where?: UserTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTerms to fetch.
     */
    orderBy?: UserTermOrderByWithRelationInput | UserTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTerms.
     */
    cursor?: UserTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTerms.
     */
    distinct?: UserTermScalarFieldEnum | UserTermScalarFieldEnum[]
  }

  /**
   * UserTerm findFirstOrThrow
   */
  export type UserTermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    /**
     * Filter, which UserTerm to fetch.
     */
    where?: UserTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTerms to fetch.
     */
    orderBy?: UserTermOrderByWithRelationInput | UserTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTerms.
     */
    cursor?: UserTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTerms.
     */
    distinct?: UserTermScalarFieldEnum | UserTermScalarFieldEnum[]
  }

  /**
   * UserTerm findMany
   */
  export type UserTermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    /**
     * Filter, which UserTerms to fetch.
     */
    where?: UserTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTerms to fetch.
     */
    orderBy?: UserTermOrderByWithRelationInput | UserTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTerms.
     */
    cursor?: UserTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTerms.
     */
    skip?: number
    distinct?: UserTermScalarFieldEnum | UserTermScalarFieldEnum[]
  }

  /**
   * UserTerm create
   */
  export type UserTermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTerm.
     */
    data: XOR<UserTermCreateInput, UserTermUncheckedCreateInput>
  }

  /**
   * UserTerm createMany
   */
  export type UserTermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTerms.
     */
    data: UserTermCreateManyInput | UserTermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTerm update
   */
  export type UserTermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTerm.
     */
    data: XOR<UserTermUpdateInput, UserTermUncheckedUpdateInput>
    /**
     * Choose, which UserTerm to update.
     */
    where: UserTermWhereUniqueInput
  }

  /**
   * UserTerm updateMany
   */
  export type UserTermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTerms.
     */
    data: XOR<UserTermUpdateManyMutationInput, UserTermUncheckedUpdateManyInput>
    /**
     * Filter which UserTerms to update
     */
    where?: UserTermWhereInput
    /**
     * Limit how many UserTerms to update.
     */
    limit?: number
  }

  /**
   * UserTerm upsert
   */
  export type UserTermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTerm to update in case it exists.
     */
    where: UserTermWhereUniqueInput
    /**
     * In case the UserTerm found by the `where` argument doesn't exist, create a new UserTerm with this data.
     */
    create: XOR<UserTermCreateInput, UserTermUncheckedCreateInput>
    /**
     * In case the UserTerm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTermUpdateInput, UserTermUncheckedUpdateInput>
  }

  /**
   * UserTerm delete
   */
  export type UserTermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
    /**
     * Filter which UserTerm to delete.
     */
    where: UserTermWhereUniqueInput
  }

  /**
   * UserTerm deleteMany
   */
  export type UserTermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTerms to delete
     */
    where?: UserTermWhereInput
    /**
     * Limit how many UserTerms to delete.
     */
    limit?: number
  }

  /**
   * UserTerm without action
   */
  export type UserTermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTerm
     */
    select?: UserTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTerm
     */
    omit?: UserTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTermInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    communityId: 'communityId',
    title: 'title',
    content: 'content',
    isAnonymous: 'isAnonymous',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const ArticleCommentScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    parentCommentId: 'parentCommentId',
    content: 'content',
    authorId: 'authorId',
    isAnonymous: 'isAnonymous',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleCommentScalarFieldEnum = (typeof ArticleCommentScalarFieldEnum)[keyof typeof ArticleCommentScalarFieldEnum]


  export const ArticleCommentLikeScalarFieldEnum: {
    commentId: 'commentId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleCommentLikeScalarFieldEnum = (typeof ArticleCommentLikeScalarFieldEnum)[keyof typeof ArticleCommentLikeScalarFieldEnum]


  export const ArticleImageScalarFieldEnum: {
    articleId: 'articleId',
    imageUrl: 'imageUrl',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleImageScalarFieldEnum = (typeof ArticleImageScalarFieldEnum)[keyof typeof ArticleImageScalarFieldEnum]


  export const ArticleLikeScalarFieldEnum: {
    articleId: 'articleId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleLikeScalarFieldEnum = (typeof ArticleLikeScalarFieldEnum)[keyof typeof ArticleLikeScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startDate: 'startDate',
    endDate: 'endDate',
    venueName: 'venueName',
    venueRoadAddress: 'venueRoadAddress',
    venueJibunAddress: 'venueJibunAddress',
    venueDetailAddress: 'venueDetailAddress',
    price: 'price',
    link: 'link',
    description: 'description',
    authorId: 'authorId',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventImageScalarFieldEnum: {
    eventId: 'eventId',
    imageUrl: 'imageUrl',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventImageScalarFieldEnum = (typeof EventImageScalarFieldEnum)[keyof typeof EventImageScalarFieldEnum]


  export const EventScrapScalarFieldEnum: {
    userId: 'userId',
    eventId: 'eventId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScrapScalarFieldEnum = (typeof EventScrapScalarFieldEnum)[keyof typeof EventScrapScalarFieldEnum]


  export const TermScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    isRequired: 'isRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TermScalarFieldEnum = (typeof TermScalarFieldEnum)[keyof typeof TermScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nickname: 'nickname',
    birthdate: 'birthdate',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    profileImage: 'profileImage',
    role: 'role',
    oauthProvider: 'oauthProvider',
    oauthId: 'oauthId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserTermScalarFieldEnum: {
    userId: 'userId',
    termId: 'termId',
    isAccepted: 'isAccepted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserTermScalarFieldEnum = (typeof UserTermScalarFieldEnum)[keyof typeof UserTermScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ArticleOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type ArticleOrderByRelevanceFieldEnum = (typeof ArticleOrderByRelevanceFieldEnum)[keyof typeof ArticleOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ArticleCommentOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type ArticleCommentOrderByRelevanceFieldEnum = (typeof ArticleCommentOrderByRelevanceFieldEnum)[keyof typeof ArticleCommentOrderByRelevanceFieldEnum]


  export const ArticleImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl'
  };

  export type ArticleImageOrderByRelevanceFieldEnum = (typeof ArticleImageOrderByRelevanceFieldEnum)[keyof typeof ArticleImageOrderByRelevanceFieldEnum]


  export const CommunityOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CommunityOrderByRelevanceFieldEnum = (typeof CommunityOrderByRelevanceFieldEnum)[keyof typeof CommunityOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    title: 'title',
    venueName: 'venueName',
    venueRoadAddress: 'venueRoadAddress',
    venueJibunAddress: 'venueJibunAddress',
    venueDetailAddress: 'venueDetailAddress',
    link: 'link',
    description: 'description',
    category: 'category'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const EventImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl'
  };

  export type EventImageOrderByRelevanceFieldEnum = (typeof EventImageOrderByRelevanceFieldEnum)[keyof typeof EventImageOrderByRelevanceFieldEnum]


  export const TermOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type TermOrderByRelevanceFieldEnum = (typeof TermOrderByRelevanceFieldEnum)[keyof typeof TermOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    nickname: 'nickname',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    profileImage: 'profileImage',
    role: 'role',
    oauthProvider: 'oauthProvider',
    oauthId: 'oauthId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: BigIntFilter<"Article"> | bigint | number
    communityId?: BigIntFilter<"Article"> | bigint | number
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    isAnonymous?: BoolFilter<"Article"> | boolean
    authorId?: BigIntFilter<"Article"> | bigint | number
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    articleImage?: ArticleImageListRelationFilter
    articleLike?: ArticleLikeListRelationFilter
    ArticleComment?: ArticleCommentListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    communityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    community?: CommunityOrderByWithRelationInput
    articleImage?: ArticleImageOrderByRelationAggregateInput
    articleLike?: ArticleLikeOrderByRelationAggregateInput
    ArticleComment?: ArticleCommentOrderByRelationAggregateInput
    _relevance?: ArticleOrderByRelevanceInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    communityId?: BigIntFilter<"Article"> | bigint | number
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    isAnonymous?: BoolFilter<"Article"> | boolean
    authorId?: BigIntFilter<"Article"> | bigint | number
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    articleImage?: ArticleImageListRelationFilter
    articleLike?: ArticleLikeListRelationFilter
    ArticleComment?: ArticleCommentListRelationFilter
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    communityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Article"> | bigint | number
    communityId?: BigIntWithAggregatesFilter<"Article"> | bigint | number
    title?: StringWithAggregatesFilter<"Article"> | string
    content?: StringWithAggregatesFilter<"Article"> | string
    isAnonymous?: BoolWithAggregatesFilter<"Article"> | boolean
    authorId?: BigIntWithAggregatesFilter<"Article"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type ArticleCommentWhereInput = {
    AND?: ArticleCommentWhereInput | ArticleCommentWhereInput[]
    OR?: ArticleCommentWhereInput[]
    NOT?: ArticleCommentWhereInput | ArticleCommentWhereInput[]
    id?: BigIntFilter<"ArticleComment"> | bigint | number
    articleId?: BigIntFilter<"ArticleComment"> | bigint | number
    parentCommentId?: BigIntNullableFilter<"ArticleComment"> | bigint | number | null
    content?: StringFilter<"ArticleComment"> | string
    authorId?: BigIntFilter<"ArticleComment"> | bigint | number
    isAnonymous?: BoolFilter<"ArticleComment"> | boolean
    createdAt?: DateTimeFilter<"ArticleComment"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleComment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    parentComment?: XOR<ArticleCommentNullableScalarRelationFilter, ArticleCommentWhereInput> | null
    replies?: ArticleCommentListRelationFilter
    articleCommentLike?: ArticleCommentLikeListRelationFilter
  }

  export type ArticleCommentOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    content?: SortOrder
    authorId?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    article?: ArticleOrderByWithRelationInput
    parentComment?: ArticleCommentOrderByWithRelationInput
    replies?: ArticleCommentOrderByRelationAggregateInput
    articleCommentLike?: ArticleCommentLikeOrderByRelationAggregateInput
    _relevance?: ArticleCommentOrderByRelevanceInput
  }

  export type ArticleCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ArticleCommentWhereInput | ArticleCommentWhereInput[]
    OR?: ArticleCommentWhereInput[]
    NOT?: ArticleCommentWhereInput | ArticleCommentWhereInput[]
    articleId?: BigIntFilter<"ArticleComment"> | bigint | number
    parentCommentId?: BigIntNullableFilter<"ArticleComment"> | bigint | number | null
    content?: StringFilter<"ArticleComment"> | string
    authorId?: BigIntFilter<"ArticleComment"> | bigint | number
    isAnonymous?: BoolFilter<"ArticleComment"> | boolean
    createdAt?: DateTimeFilter<"ArticleComment"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleComment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    parentComment?: XOR<ArticleCommentNullableScalarRelationFilter, ArticleCommentWhereInput> | null
    replies?: ArticleCommentListRelationFilter
    articleCommentLike?: ArticleCommentLikeListRelationFilter
  }, "id">

  export type ArticleCommentOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    content?: SortOrder
    authorId?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCommentCountOrderByAggregateInput
    _avg?: ArticleCommentAvgOrderByAggregateInput
    _max?: ArticleCommentMaxOrderByAggregateInput
    _min?: ArticleCommentMinOrderByAggregateInput
    _sum?: ArticleCommentSumOrderByAggregateInput
  }

  export type ArticleCommentScalarWhereWithAggregatesInput = {
    AND?: ArticleCommentScalarWhereWithAggregatesInput | ArticleCommentScalarWhereWithAggregatesInput[]
    OR?: ArticleCommentScalarWhereWithAggregatesInput[]
    NOT?: ArticleCommentScalarWhereWithAggregatesInput | ArticleCommentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ArticleComment"> | bigint | number
    articleId?: BigIntWithAggregatesFilter<"ArticleComment"> | bigint | number
    parentCommentId?: BigIntNullableWithAggregatesFilter<"ArticleComment"> | bigint | number | null
    content?: StringWithAggregatesFilter<"ArticleComment"> | string
    authorId?: BigIntWithAggregatesFilter<"ArticleComment"> | bigint | number
    isAnonymous?: BoolWithAggregatesFilter<"ArticleComment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ArticleComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleComment"> | Date | string
  }

  export type ArticleCommentLikeWhereInput = {
    AND?: ArticleCommentLikeWhereInput | ArticleCommentLikeWhereInput[]
    OR?: ArticleCommentLikeWhereInput[]
    NOT?: ArticleCommentLikeWhereInput | ArticleCommentLikeWhereInput[]
    commentId?: BigIntFilter<"ArticleCommentLike"> | bigint | number
    userId?: BigIntFilter<"ArticleCommentLike"> | bigint | number
    createdAt?: DateTimeFilter<"ArticleCommentLike"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleCommentLike"> | Date | string
    articleComment?: XOR<ArticleCommentScalarRelationFilter, ArticleCommentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ArticleCommentLikeOrderByWithRelationInput = {
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articleComment?: ArticleCommentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ArticleCommentLikeWhereUniqueInput = Prisma.AtLeast<{
    commentId_userId?: ArticleCommentLikeCommentIdUserIdCompoundUniqueInput
    AND?: ArticleCommentLikeWhereInput | ArticleCommentLikeWhereInput[]
    OR?: ArticleCommentLikeWhereInput[]
    NOT?: ArticleCommentLikeWhereInput | ArticleCommentLikeWhereInput[]
    commentId?: BigIntFilter<"ArticleCommentLike"> | bigint | number
    userId?: BigIntFilter<"ArticleCommentLike"> | bigint | number
    createdAt?: DateTimeFilter<"ArticleCommentLike"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleCommentLike"> | Date | string
    articleComment?: XOR<ArticleCommentScalarRelationFilter, ArticleCommentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "commentId_userId">

  export type ArticleCommentLikeOrderByWithAggregationInput = {
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCommentLikeCountOrderByAggregateInput
    _avg?: ArticleCommentLikeAvgOrderByAggregateInput
    _max?: ArticleCommentLikeMaxOrderByAggregateInput
    _min?: ArticleCommentLikeMinOrderByAggregateInput
    _sum?: ArticleCommentLikeSumOrderByAggregateInput
  }

  export type ArticleCommentLikeScalarWhereWithAggregatesInput = {
    AND?: ArticleCommentLikeScalarWhereWithAggregatesInput | ArticleCommentLikeScalarWhereWithAggregatesInput[]
    OR?: ArticleCommentLikeScalarWhereWithAggregatesInput[]
    NOT?: ArticleCommentLikeScalarWhereWithAggregatesInput | ArticleCommentLikeScalarWhereWithAggregatesInput[]
    commentId?: BigIntWithAggregatesFilter<"ArticleCommentLike"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"ArticleCommentLike"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"ArticleCommentLike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleCommentLike"> | Date | string
  }

  export type ArticleImageWhereInput = {
    AND?: ArticleImageWhereInput | ArticleImageWhereInput[]
    OR?: ArticleImageWhereInput[]
    NOT?: ArticleImageWhereInput | ArticleImageWhereInput[]
    articleId?: BigIntFilter<"ArticleImage"> | bigint | number
    imageUrl?: StringFilter<"ArticleImage"> | string
    order?: IntFilter<"ArticleImage"> | number
    createdAt?: DateTimeFilter<"ArticleImage"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleImage"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }

  export type ArticleImageOrderByWithRelationInput = {
    articleId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
    _relevance?: ArticleImageOrderByRelevanceInput
  }

  export type ArticleImageWhereUniqueInput = Prisma.AtLeast<{
    articleId_order?: ArticleImageArticleIdOrderCompoundUniqueInput
    AND?: ArticleImageWhereInput | ArticleImageWhereInput[]
    OR?: ArticleImageWhereInput[]
    NOT?: ArticleImageWhereInput | ArticleImageWhereInput[]
    articleId?: BigIntFilter<"ArticleImage"> | bigint | number
    imageUrl?: StringFilter<"ArticleImage"> | string
    order?: IntFilter<"ArticleImage"> | number
    createdAt?: DateTimeFilter<"ArticleImage"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleImage"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }, "articleId_order">

  export type ArticleImageOrderByWithAggregationInput = {
    articleId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleImageCountOrderByAggregateInput
    _avg?: ArticleImageAvgOrderByAggregateInput
    _max?: ArticleImageMaxOrderByAggregateInput
    _min?: ArticleImageMinOrderByAggregateInput
    _sum?: ArticleImageSumOrderByAggregateInput
  }

  export type ArticleImageScalarWhereWithAggregatesInput = {
    AND?: ArticleImageScalarWhereWithAggregatesInput | ArticleImageScalarWhereWithAggregatesInput[]
    OR?: ArticleImageScalarWhereWithAggregatesInput[]
    NOT?: ArticleImageScalarWhereWithAggregatesInput | ArticleImageScalarWhereWithAggregatesInput[]
    articleId?: BigIntWithAggregatesFilter<"ArticleImage"> | bigint | number
    imageUrl?: StringWithAggregatesFilter<"ArticleImage"> | string
    order?: IntWithAggregatesFilter<"ArticleImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ArticleImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleImage"> | Date | string
  }

  export type ArticleLikeWhereInput = {
    AND?: ArticleLikeWhereInput | ArticleLikeWhereInput[]
    OR?: ArticleLikeWhereInput[]
    NOT?: ArticleLikeWhereInput | ArticleLikeWhereInput[]
    articleId?: BigIntFilter<"ArticleLike"> | bigint | number
    userId?: BigIntFilter<"ArticleLike"> | bigint | number
    createdAt?: DateTimeFilter<"ArticleLike"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleLike"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ArticleLikeOrderByWithRelationInput = {
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ArticleLikeWhereUniqueInput = Prisma.AtLeast<{
    articleId_userId?: ArticleLikeArticleIdUserIdCompoundUniqueInput
    AND?: ArticleLikeWhereInput | ArticleLikeWhereInput[]
    OR?: ArticleLikeWhereInput[]
    NOT?: ArticleLikeWhereInput | ArticleLikeWhereInput[]
    articleId?: BigIntFilter<"ArticleLike"> | bigint | number
    userId?: BigIntFilter<"ArticleLike"> | bigint | number
    createdAt?: DateTimeFilter<"ArticleLike"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleLike"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "articleId_userId">

  export type ArticleLikeOrderByWithAggregationInput = {
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleLikeCountOrderByAggregateInput
    _avg?: ArticleLikeAvgOrderByAggregateInput
    _max?: ArticleLikeMaxOrderByAggregateInput
    _min?: ArticleLikeMinOrderByAggregateInput
    _sum?: ArticleLikeSumOrderByAggregateInput
  }

  export type ArticleLikeScalarWhereWithAggregatesInput = {
    AND?: ArticleLikeScalarWhereWithAggregatesInput | ArticleLikeScalarWhereWithAggregatesInput[]
    OR?: ArticleLikeScalarWhereWithAggregatesInput[]
    NOT?: ArticleLikeScalarWhereWithAggregatesInput | ArticleLikeScalarWhereWithAggregatesInput[]
    articleId?: BigIntWithAggregatesFilter<"ArticleLike"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"ArticleLike"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"ArticleLike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleLike"> | Date | string
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: BigIntFilter<"Community"> | bigint | number
    name?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    article?: ArticleListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByRelationAggregateInput
    _relevance?: CommunityOrderByRelevanceInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    name?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    article?: ArticleListRelationFilter
  }, "id">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Community"> | bigint | number
    name?: StringWithAggregatesFilter<"Community"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: BigIntFilter<"Event"> | bigint | number
    title?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    venueName?: StringNullableFilter<"Event"> | string | null
    venueRoadAddress?: StringNullableFilter<"Event"> | string | null
    venueJibunAddress?: StringNullableFilter<"Event"> | string | null
    venueDetailAddress?: StringNullableFilter<"Event"> | string | null
    price?: IntFilter<"Event"> | number
    link?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    authorId?: BigIntFilter<"Event"> | bigint | number
    category?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    eventImage?: EventImageListRelationFilter
    eventScrap?: EventScrapListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    venueName?: SortOrderInput | SortOrder
    venueRoadAddress?: SortOrderInput | SortOrder
    venueJibunAddress?: SortOrderInput | SortOrder
    venueDetailAddress?: SortOrderInput | SortOrder
    price?: SortOrder
    link?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    authorId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    eventImage?: EventImageOrderByRelationAggregateInput
    eventScrap?: EventScrapOrderByRelationAggregateInput
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    venueName?: StringNullableFilter<"Event"> | string | null
    venueRoadAddress?: StringNullableFilter<"Event"> | string | null
    venueJibunAddress?: StringNullableFilter<"Event"> | string | null
    venueDetailAddress?: StringNullableFilter<"Event"> | string | null
    price?: IntFilter<"Event"> | number
    link?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    authorId?: BigIntFilter<"Event"> | bigint | number
    category?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    eventImage?: EventImageListRelationFilter
    eventScrap?: EventScrapListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    venueName?: SortOrderInput | SortOrder
    venueRoadAddress?: SortOrderInput | SortOrder
    venueJibunAddress?: SortOrderInput | SortOrder
    venueDetailAddress?: SortOrderInput | SortOrder
    price?: SortOrder
    link?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    authorId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Event"> | bigint | number
    title?: StringWithAggregatesFilter<"Event"> | string
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    venueName?: StringNullableWithAggregatesFilter<"Event"> | string | null
    venueRoadAddress?: StringNullableWithAggregatesFilter<"Event"> | string | null
    venueJibunAddress?: StringNullableWithAggregatesFilter<"Event"> | string | null
    venueDetailAddress?: StringNullableWithAggregatesFilter<"Event"> | string | null
    price?: IntWithAggregatesFilter<"Event"> | number
    link?: StringNullableWithAggregatesFilter<"Event"> | string | null
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    authorId?: BigIntWithAggregatesFilter<"Event"> | bigint | number
    category?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventImageWhereInput = {
    AND?: EventImageWhereInput | EventImageWhereInput[]
    OR?: EventImageWhereInput[]
    NOT?: EventImageWhereInput | EventImageWhereInput[]
    eventId?: BigIntFilter<"EventImage"> | bigint | number
    imageUrl?: StringFilter<"EventImage"> | string
    order?: IntFilter<"EventImage"> | number
    createdAt?: DateTimeFilter<"EventImage"> | Date | string
    updatedAt?: DateTimeFilter<"EventImage"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventImageOrderByWithRelationInput = {
    eventId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    _relevance?: EventImageOrderByRelevanceInput
  }

  export type EventImageWhereUniqueInput = Prisma.AtLeast<{
    eventId_order?: EventImageEventIdOrderCompoundUniqueInput
    AND?: EventImageWhereInput | EventImageWhereInput[]
    OR?: EventImageWhereInput[]
    NOT?: EventImageWhereInput | EventImageWhereInput[]
    eventId?: BigIntFilter<"EventImage"> | bigint | number
    imageUrl?: StringFilter<"EventImage"> | string
    order?: IntFilter<"EventImage"> | number
    createdAt?: DateTimeFilter<"EventImage"> | Date | string
    updatedAt?: DateTimeFilter<"EventImage"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "eventId_order">

  export type EventImageOrderByWithAggregationInput = {
    eventId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventImageCountOrderByAggregateInput
    _avg?: EventImageAvgOrderByAggregateInput
    _max?: EventImageMaxOrderByAggregateInput
    _min?: EventImageMinOrderByAggregateInput
    _sum?: EventImageSumOrderByAggregateInput
  }

  export type EventImageScalarWhereWithAggregatesInput = {
    AND?: EventImageScalarWhereWithAggregatesInput | EventImageScalarWhereWithAggregatesInput[]
    OR?: EventImageScalarWhereWithAggregatesInput[]
    NOT?: EventImageScalarWhereWithAggregatesInput | EventImageScalarWhereWithAggregatesInput[]
    eventId?: BigIntWithAggregatesFilter<"EventImage"> | bigint | number
    imageUrl?: StringWithAggregatesFilter<"EventImage"> | string
    order?: IntWithAggregatesFilter<"EventImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EventImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventImage"> | Date | string
  }

  export type EventScrapWhereInput = {
    AND?: EventScrapWhereInput | EventScrapWhereInput[]
    OR?: EventScrapWhereInput[]
    NOT?: EventScrapWhereInput | EventScrapWhereInput[]
    userId?: BigIntFilter<"EventScrap"> | bigint | number
    eventId?: BigIntFilter<"EventScrap"> | bigint | number
    createdAt?: DateTimeFilter<"EventScrap"> | Date | string
    updatedAt?: DateTimeFilter<"EventScrap"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventScrapOrderByWithRelationInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type EventScrapWhereUniqueInput = Prisma.AtLeast<{
    userId_eventId?: EventScrapUserIdEventIdCompoundUniqueInput
    AND?: EventScrapWhereInput | EventScrapWhereInput[]
    OR?: EventScrapWhereInput[]
    NOT?: EventScrapWhereInput | EventScrapWhereInput[]
    userId?: BigIntFilter<"EventScrap"> | bigint | number
    eventId?: BigIntFilter<"EventScrap"> | bigint | number
    createdAt?: DateTimeFilter<"EventScrap"> | Date | string
    updatedAt?: DateTimeFilter<"EventScrap"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "userId_eventId">

  export type EventScrapOrderByWithAggregationInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventScrapCountOrderByAggregateInput
    _avg?: EventScrapAvgOrderByAggregateInput
    _max?: EventScrapMaxOrderByAggregateInput
    _min?: EventScrapMinOrderByAggregateInput
    _sum?: EventScrapSumOrderByAggregateInput
  }

  export type EventScrapScalarWhereWithAggregatesInput = {
    AND?: EventScrapScalarWhereWithAggregatesInput | EventScrapScalarWhereWithAggregatesInput[]
    OR?: EventScrapScalarWhereWithAggregatesInput[]
    NOT?: EventScrapScalarWhereWithAggregatesInput | EventScrapScalarWhereWithAggregatesInput[]
    userId?: BigIntWithAggregatesFilter<"EventScrap"> | bigint | number
    eventId?: BigIntWithAggregatesFilter<"EventScrap"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"EventScrap"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventScrap"> | Date | string
  }

  export type TermWhereInput = {
    AND?: TermWhereInput | TermWhereInput[]
    OR?: TermWhereInput[]
    NOT?: TermWhereInput | TermWhereInput[]
    id?: BigIntFilter<"Term"> | bigint | number
    title?: StringFilter<"Term"> | string
    content?: StringFilter<"Term"> | string
    isRequired?: BoolFilter<"Term"> | boolean
    createdAt?: DateTimeFilter<"Term"> | Date | string
    updatedAt?: DateTimeFilter<"Term"> | Date | string
    userTerm?: UserTermListRelationFilter
  }

  export type TermOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userTerm?: UserTermOrderByRelationAggregateInput
    _relevance?: TermOrderByRelevanceInput
  }

  export type TermWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TermWhereInput | TermWhereInput[]
    OR?: TermWhereInput[]
    NOT?: TermWhereInput | TermWhereInput[]
    title?: StringFilter<"Term"> | string
    content?: StringFilter<"Term"> | string
    isRequired?: BoolFilter<"Term"> | boolean
    createdAt?: DateTimeFilter<"Term"> | Date | string
    updatedAt?: DateTimeFilter<"Term"> | Date | string
    userTerm?: UserTermListRelationFilter
  }, "id">

  export type TermOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TermCountOrderByAggregateInput
    _avg?: TermAvgOrderByAggregateInput
    _max?: TermMaxOrderByAggregateInput
    _min?: TermMinOrderByAggregateInput
    _sum?: TermSumOrderByAggregateInput
  }

  export type TermScalarWhereWithAggregatesInput = {
    AND?: TermScalarWhereWithAggregatesInput | TermScalarWhereWithAggregatesInput[]
    OR?: TermScalarWhereWithAggregatesInput[]
    NOT?: TermScalarWhereWithAggregatesInput | TermScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Term"> | bigint | number
    title?: StringWithAggregatesFilter<"Term"> | string
    content?: StringWithAggregatesFilter<"Term"> | string
    isRequired?: BoolWithAggregatesFilter<"Term"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Term"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Term"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringNullableFilter<"User"> | string | null
    nickname?: StringFilter<"User"> | string
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    oauthProvider?: StringNullableFilter<"User"> | string | null
    oauthId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    article?: ArticleListRelationFilter
    articleComment?: ArticleCommentListRelationFilter
    articleCommentLike?: ArticleCommentLikeListRelationFilter
    articleLike?: ArticleLikeListRelationFilter
    event?: EventListRelationFilter
    eventScrap?: EventScrapListRelationFilter
    userTerm?: UserTermListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nickname?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    oauthProvider?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByRelationAggregateInput
    articleComment?: ArticleCommentOrderByRelationAggregateInput
    articleCommentLike?: ArticleCommentLikeOrderByRelationAggregateInput
    articleLike?: ArticleLikeOrderByRelationAggregateInput
    event?: EventOrderByRelationAggregateInput
    eventScrap?: EventScrapOrderByRelationAggregateInput
    userTerm?: UserTermOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    nickname?: StringFilter<"User"> | string
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    oauthProvider?: StringNullableFilter<"User"> | string | null
    oauthId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    article?: ArticleListRelationFilter
    articleComment?: ArticleCommentListRelationFilter
    articleCommentLike?: ArticleCommentLikeListRelationFilter
    articleLike?: ArticleLikeListRelationFilter
    event?: EventListRelationFilter
    eventScrap?: EventScrapListRelationFilter
    userTerm?: UserTermListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nickname?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    oauthProvider?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickname?: StringWithAggregatesFilter<"User"> | string
    birthdate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    oauthProvider?: StringNullableWithAggregatesFilter<"User"> | string | null
    oauthId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserTermWhereInput = {
    AND?: UserTermWhereInput | UserTermWhereInput[]
    OR?: UserTermWhereInput[]
    NOT?: UserTermWhereInput | UserTermWhereInput[]
    userId?: BigIntFilter<"UserTerm"> | bigint | number
    termId?: BigIntFilter<"UserTerm"> | bigint | number
    isAccepted?: BoolFilter<"UserTerm"> | boolean
    createdAt?: DateTimeFilter<"UserTerm"> | Date | string
    updatedAt?: DateTimeFilter<"UserTerm"> | Date | string
    term?: XOR<TermScalarRelationFilter, TermWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserTermOrderByWithRelationInput = {
    userId?: SortOrder
    termId?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    term?: TermOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserTermWhereUniqueInput = Prisma.AtLeast<{
    userId_termId?: UserTermUserIdTermIdCompoundUniqueInput
    AND?: UserTermWhereInput | UserTermWhereInput[]
    OR?: UserTermWhereInput[]
    NOT?: UserTermWhereInput | UserTermWhereInput[]
    userId?: BigIntFilter<"UserTerm"> | bigint | number
    termId?: BigIntFilter<"UserTerm"> | bigint | number
    isAccepted?: BoolFilter<"UserTerm"> | boolean
    createdAt?: DateTimeFilter<"UserTerm"> | Date | string
    updatedAt?: DateTimeFilter<"UserTerm"> | Date | string
    term?: XOR<TermScalarRelationFilter, TermWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_termId">

  export type UserTermOrderByWithAggregationInput = {
    userId?: SortOrder
    termId?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserTermCountOrderByAggregateInput
    _avg?: UserTermAvgOrderByAggregateInput
    _max?: UserTermMaxOrderByAggregateInput
    _min?: UserTermMinOrderByAggregateInput
    _sum?: UserTermSumOrderByAggregateInput
  }

  export type UserTermScalarWhereWithAggregatesInput = {
    AND?: UserTermScalarWhereWithAggregatesInput | UserTermScalarWhereWithAggregatesInput[]
    OR?: UserTermScalarWhereWithAggregatesInput[]
    NOT?: UserTermScalarWhereWithAggregatesInput | UserTermScalarWhereWithAggregatesInput[]
    userId?: BigIntWithAggregatesFilter<"UserTerm"> | bigint | number
    termId?: BigIntWithAggregatesFilter<"UserTerm"> | bigint | number
    isAccepted?: BoolWithAggregatesFilter<"UserTerm"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserTerm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserTerm"> | Date | string
  }

  export type ArticleCreateInput = {
    id?: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleInput
    community: CommunityCreateNestedOneWithoutArticleInput
    articleImage?: ArticleImageCreateNestedManyWithoutArticleInput
    articleLike?: ArticleLikeCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: bigint | number
    communityId: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    authorId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    articleImage?: ArticleImageUncheckedCreateNestedManyWithoutArticleInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleNestedInput
    community?: CommunityUpdateOneRequiredWithoutArticleNestedInput
    articleImage?: ArticleImageUpdateManyWithoutArticleNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communityId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleImage?: ArticleImageUncheckedUpdateManyWithoutArticleNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: bigint | number
    communityId: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    authorId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communityId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentCreateInput = {
    id?: bigint | number
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleCommentInput
    article: ArticleCreateNestedOneWithoutArticleCommentInput
    parentComment?: ArticleCommentCreateNestedOneWithoutRepliesInput
    replies?: ArticleCommentCreateNestedManyWithoutParentCommentInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentUncheckedCreateInput = {
    id?: bigint | number
    articleId: bigint | number
    parentCommentId?: bigint | number | null
    content: string
    authorId: bigint | number
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ArticleCommentUncheckedCreateNestedManyWithoutParentCommentInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleCommentNestedInput
    article?: ArticleUpdateOneRequiredWithoutArticleCommentNestedInput
    parentComment?: ArticleCommentUpdateOneWithoutRepliesNestedInput
    replies?: ArticleCommentUpdateManyWithoutParentCommentNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    parentCommentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArticleCommentUncheckedUpdateManyWithoutParentCommentNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentCreateManyInput = {
    id?: bigint | number
    articleId: bigint | number
    parentCommentId?: bigint | number | null
    content: string
    authorId: bigint | number
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    parentCommentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentLikeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    articleComment: ArticleCommentCreateNestedOneWithoutArticleCommentLikeInput
    user: UserCreateNestedOneWithoutArticleCommentLikeInput
  }

  export type ArticleCommentLikeUncheckedCreateInput = {
    commentId: bigint | number
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleComment?: ArticleCommentUpdateOneRequiredWithoutArticleCommentLikeNestedInput
    user?: UserUpdateOneRequiredWithoutArticleCommentLikeNestedInput
  }

  export type ArticleCommentLikeUncheckedUpdateInput = {
    commentId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentLikeCreateManyInput = {
    commentId: bigint | number
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentLikeUncheckedUpdateManyInput = {
    commentId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleImageCreateInput = {
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutArticleImageInput
  }

  export type ArticleImageUncheckedCreateInput = {
    articleId: bigint | number
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutArticleImageNestedInput
  }

  export type ArticleImageUncheckedUpdateInput = {
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleImageCreateManyInput = {
    articleId: bigint | number
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleImageUncheckedUpdateManyInput = {
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutArticleLikeInput
    user: UserCreateNestedOneWithoutArticleLikeInput
  }

  export type ArticleLikeUncheckedCreateInput = {
    articleId: bigint | number
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutArticleLikeNestedInput
    user?: UserUpdateOneRequiredWithoutArticleLikeNestedInput
  }

  export type ArticleLikeUncheckedUpdateInput = {
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeCreateManyInput = {
    articleId: bigint | number
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUncheckedUpdateManyInput = {
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateInput = {
    id?: bigint | number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: bigint | number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: bigint | number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventInput
    eventImage?: EventImageCreateNestedManyWithoutEventInput
    eventScrap?: EventScrapCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    authorId: bigint | number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventNestedInput
    eventImage?: EventImageUpdateManyWithoutEventNestedInput
    eventScrap?: EventScrapUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    eventScrap?: EventScrapUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    authorId: bigint | number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageCreateInput = {
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutEventImageInput
  }

  export type EventImageUncheckedCreateInput = {
    eventId: bigint | number
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventImageNestedInput
  }

  export type EventImageUncheckedUpdateInput = {
    eventId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageCreateManyInput = {
    eventId: bigint | number
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateManyInput = {
    eventId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScrapCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventScrapInput
    event: EventCreateNestedOneWithoutEventScrapInput
  }

  export type EventScrapUncheckedCreateInput = {
    userId: bigint | number
    eventId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventScrapUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventScrapNestedInput
    event?: EventUpdateOneRequiredWithoutEventScrapNestedInput
  }

  export type EventScrapUncheckedUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    eventId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScrapCreateManyInput = {
    userId: bigint | number
    eventId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventScrapUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScrapUncheckedUpdateManyInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    eventId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermCreateInput = {
    id?: bigint | number
    title: string
    content: string
    isRequired: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userTerm?: UserTermCreateNestedManyWithoutTermInput
  }

  export type TermUncheckedCreateInput = {
    id?: bigint | number
    title: string
    content: string
    isRequired: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userTerm?: UserTermUncheckedCreateNestedManyWithoutTermInput
  }

  export type TermUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTerm?: UserTermUpdateManyWithoutTermNestedInput
  }

  export type TermUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTerm?: UserTermUncheckedUpdateManyWithoutTermNestedInput
  }

  export type TermCreateManyInput = {
    id?: bigint | number
    title: string
    content: string
    isRequired: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeCreateNestedManyWithoutUserInput
    event?: EventCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapCreateNestedManyWithoutUserInput
    userTerm?: UserTermCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleUncheckedCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentUncheckedCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    event?: EventUncheckedCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutUserInput
    userTerm?: UserTermUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutUserNestedInput
    event?: EventUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUncheckedUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    event?: EventUncheckedUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUncheckedUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTermCreateInput = {
    isAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    term: TermCreateNestedOneWithoutUserTermInput
    user: UserCreateNestedOneWithoutUserTermInput
  }

  export type UserTermUncheckedCreateInput = {
    userId: bigint | number
    termId: bigint | number
    isAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTermUpdateInput = {
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    term?: TermUpdateOneRequiredWithoutUserTermNestedInput
    user?: UserUpdateOneRequiredWithoutUserTermNestedInput
  }

  export type UserTermUncheckedUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    termId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTermCreateManyInput = {
    userId: bigint | number
    termId: bigint | number
    isAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTermUpdateManyMutationInput = {
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTermUncheckedUpdateManyInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    termId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommunityScalarRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type ArticleImageListRelationFilter = {
    every?: ArticleImageWhereInput
    some?: ArticleImageWhereInput
    none?: ArticleImageWhereInput
  }

  export type ArticleLikeListRelationFilter = {
    every?: ArticleLikeWhereInput
    some?: ArticleLikeWhereInput
    none?: ArticleLikeWhereInput
  }

  export type ArticleCommentListRelationFilter = {
    every?: ArticleCommentWhereInput
    some?: ArticleCommentWhereInput
    none?: ArticleCommentWhereInput
  }

  export type ArticleImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleOrderByRelevanceInput = {
    fields: ArticleOrderByRelevanceFieldEnum | ArticleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type ArticleCommentNullableScalarRelationFilter = {
    is?: ArticleCommentWhereInput | null
    isNot?: ArticleCommentWhereInput | null
  }

  export type ArticleCommentLikeListRelationFilter = {
    every?: ArticleCommentLikeWhereInput
    some?: ArticleCommentLikeWhereInput
    none?: ArticleCommentLikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticleCommentLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCommentOrderByRelevanceInput = {
    fields: ArticleCommentOrderByRelevanceFieldEnum | ArticleCommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticleCommentCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    parentCommentId?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    parentCommentId?: SortOrder
    authorId?: SortOrder
  }

  export type ArticleCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    parentCommentId?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCommentMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    parentCommentId?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCommentSumOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    parentCommentId?: SortOrder
    authorId?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ArticleCommentScalarRelationFilter = {
    is?: ArticleCommentWhereInput
    isNot?: ArticleCommentWhereInput
  }

  export type ArticleCommentLikeCommentIdUserIdCompoundUniqueInput = {
    commentId: bigint | number
    userId: bigint | number
  }

  export type ArticleCommentLikeCountOrderByAggregateInput = {
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCommentLikeAvgOrderByAggregateInput = {
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type ArticleCommentLikeMaxOrderByAggregateInput = {
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCommentLikeMinOrderByAggregateInput = {
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCommentLikeSumOrderByAggregateInput = {
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ArticleImageOrderByRelevanceInput = {
    fields: ArticleImageOrderByRelevanceFieldEnum | ArticleImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticleImageArticleIdOrderCompoundUniqueInput = {
    articleId: bigint | number
    order: number
  }

  export type ArticleImageCountOrderByAggregateInput = {
    articleId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleImageAvgOrderByAggregateInput = {
    articleId?: SortOrder
    order?: SortOrder
  }

  export type ArticleImageMaxOrderByAggregateInput = {
    articleId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleImageMinOrderByAggregateInput = {
    articleId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleImageSumOrderByAggregateInput = {
    articleId?: SortOrder
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ArticleLikeArticleIdUserIdCompoundUniqueInput = {
    articleId: bigint | number
    userId: bigint | number
  }

  export type ArticleLikeCountOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleLikeAvgOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type ArticleLikeMaxOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleLikeMinOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleLikeSumOrderByAggregateInput = {
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityOrderByRelevanceInput = {
    fields: CommunityOrderByRelevanceFieldEnum | CommunityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventImageListRelationFilter = {
    every?: EventImageWhereInput
    some?: EventImageWhereInput
    none?: EventImageWhereInput
  }

  export type EventScrapListRelationFilter = {
    every?: EventScrapWhereInput
    some?: EventScrapWhereInput
    none?: EventScrapWhereInput
  }

  export type EventImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventScrapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    venueName?: SortOrder
    venueRoadAddress?: SortOrder
    venueJibunAddress?: SortOrder
    venueDetailAddress?: SortOrder
    price?: SortOrder
    link?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    authorId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    venueName?: SortOrder
    venueRoadAddress?: SortOrder
    venueJibunAddress?: SortOrder
    venueDetailAddress?: SortOrder
    price?: SortOrder
    link?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    venueName?: SortOrder
    venueRoadAddress?: SortOrder
    venueJibunAddress?: SortOrder
    venueDetailAddress?: SortOrder
    price?: SortOrder
    link?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    authorId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventImageOrderByRelevanceInput = {
    fields: EventImageOrderByRelevanceFieldEnum | EventImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventImageEventIdOrderCompoundUniqueInput = {
    eventId: bigint | number
    order: number
  }

  export type EventImageCountOrderByAggregateInput = {
    eventId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventImageAvgOrderByAggregateInput = {
    eventId?: SortOrder
    order?: SortOrder
  }

  export type EventImageMaxOrderByAggregateInput = {
    eventId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventImageMinOrderByAggregateInput = {
    eventId?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventImageSumOrderByAggregateInput = {
    eventId?: SortOrder
    order?: SortOrder
  }

  export type EventScrapUserIdEventIdCompoundUniqueInput = {
    userId: bigint | number
    eventId: bigint | number
  }

  export type EventScrapCountOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventScrapAvgOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type EventScrapMaxOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventScrapMinOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventScrapSumOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type UserTermListRelationFilter = {
    every?: UserTermWhereInput
    some?: UserTermWhereInput
    none?: UserTermWhereInput
  }

  export type UserTermOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TermOrderByRelevanceInput = {
    fields: TermOrderByRelevanceFieldEnum | TermOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TermCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TermMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TermScalarRelationFilter = {
    is?: TermWhereInput
    isNot?: TermWhereInput
  }

  export type UserTermUserIdTermIdCompoundUniqueInput = {
    userId: bigint | number
    termId: bigint | number
  }

  export type UserTermCountOrderByAggregateInput = {
    userId?: SortOrder
    termId?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTermAvgOrderByAggregateInput = {
    userId?: SortOrder
    termId?: SortOrder
  }

  export type UserTermMaxOrderByAggregateInput = {
    userId?: SortOrder
    termId?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTermMinOrderByAggregateInput = {
    userId?: SortOrder
    termId?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTermSumOrderByAggregateInput = {
    userId?: SortOrder
    termId?: SortOrder
  }

  export type UserCreateNestedOneWithoutArticleInput = {
    create?: XOR<UserCreateWithoutArticleInput, UserUncheckedCreateWithoutArticleInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutArticleInput = {
    create?: XOR<CommunityCreateWithoutArticleInput, CommunityUncheckedCreateWithoutArticleInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutArticleInput
    connect?: CommunityWhereUniqueInput
  }

  export type ArticleImageCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleImageCreateWithoutArticleInput, ArticleImageUncheckedCreateWithoutArticleInput> | ArticleImageCreateWithoutArticleInput[] | ArticleImageUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleImageCreateOrConnectWithoutArticleInput | ArticleImageCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleImageCreateManyArticleInputEnvelope
    connect?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
  }

  export type ArticleLikeCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput> | ArticleLikeCreateWithoutArticleInput[] | ArticleLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutArticleInput | ArticleLikeCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleLikeCreateManyArticleInputEnvelope
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
  }

  export type ArticleCommentCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleCommentCreateWithoutArticleInput, ArticleCommentUncheckedCreateWithoutArticleInput> | ArticleCommentCreateWithoutArticleInput[] | ArticleCommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutArticleInput | ArticleCommentCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleCommentCreateManyArticleInputEnvelope
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
  }

  export type ArticleImageUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleImageCreateWithoutArticleInput, ArticleImageUncheckedCreateWithoutArticleInput> | ArticleImageCreateWithoutArticleInput[] | ArticleImageUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleImageCreateOrConnectWithoutArticleInput | ArticleImageCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleImageCreateManyArticleInputEnvelope
    connect?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
  }

  export type ArticleLikeUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput> | ArticleLikeCreateWithoutArticleInput[] | ArticleLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutArticleInput | ArticleLikeCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleLikeCreateManyArticleInputEnvelope
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
  }

  export type ArticleCommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleCommentCreateWithoutArticleInput, ArticleCommentUncheckedCreateWithoutArticleInput> | ArticleCommentCreateWithoutArticleInput[] | ArticleCommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutArticleInput | ArticleCommentCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleCommentCreateManyArticleInputEnvelope
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutArticleNestedInput = {
    create?: XOR<UserCreateWithoutArticleInput, UserUncheckedCreateWithoutArticleInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleInput
    upsert?: UserUpsertWithoutArticleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticleInput, UserUpdateWithoutArticleInput>, UserUncheckedUpdateWithoutArticleInput>
  }

  export type CommunityUpdateOneRequiredWithoutArticleNestedInput = {
    create?: XOR<CommunityCreateWithoutArticleInput, CommunityUncheckedCreateWithoutArticleInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutArticleInput
    upsert?: CommunityUpsertWithoutArticleInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutArticleInput, CommunityUpdateWithoutArticleInput>, CommunityUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleImageUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleImageCreateWithoutArticleInput, ArticleImageUncheckedCreateWithoutArticleInput> | ArticleImageCreateWithoutArticleInput[] | ArticleImageUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleImageCreateOrConnectWithoutArticleInput | ArticleImageCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleImageUpsertWithWhereUniqueWithoutArticleInput | ArticleImageUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleImageCreateManyArticleInputEnvelope
    set?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
    disconnect?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
    delete?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
    connect?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
    update?: ArticleImageUpdateWithWhereUniqueWithoutArticleInput | ArticleImageUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleImageUpdateManyWithWhereWithoutArticleInput | ArticleImageUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleImageScalarWhereInput | ArticleImageScalarWhereInput[]
  }

  export type ArticleLikeUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput> | ArticleLikeCreateWithoutArticleInput[] | ArticleLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutArticleInput | ArticleLikeCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleLikeUpsertWithWhereUniqueWithoutArticleInput | ArticleLikeUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleLikeCreateManyArticleInputEnvelope
    set?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    disconnect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    delete?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    update?: ArticleLikeUpdateWithWhereUniqueWithoutArticleInput | ArticleLikeUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleLikeUpdateManyWithWhereWithoutArticleInput | ArticleLikeUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
  }

  export type ArticleCommentUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleCommentCreateWithoutArticleInput, ArticleCommentUncheckedCreateWithoutArticleInput> | ArticleCommentCreateWithoutArticleInput[] | ArticleCommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutArticleInput | ArticleCommentCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleCommentUpsertWithWhereUniqueWithoutArticleInput | ArticleCommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleCommentCreateManyArticleInputEnvelope
    set?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    disconnect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    delete?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    update?: ArticleCommentUpdateWithWhereUniqueWithoutArticleInput | ArticleCommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleCommentUpdateManyWithWhereWithoutArticleInput | ArticleCommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleCommentScalarWhereInput | ArticleCommentScalarWhereInput[]
  }

  export type ArticleImageUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleImageCreateWithoutArticleInput, ArticleImageUncheckedCreateWithoutArticleInput> | ArticleImageCreateWithoutArticleInput[] | ArticleImageUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleImageCreateOrConnectWithoutArticleInput | ArticleImageCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleImageUpsertWithWhereUniqueWithoutArticleInput | ArticleImageUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleImageCreateManyArticleInputEnvelope
    set?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
    disconnect?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
    delete?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
    connect?: ArticleImageWhereUniqueInput | ArticleImageWhereUniqueInput[]
    update?: ArticleImageUpdateWithWhereUniqueWithoutArticleInput | ArticleImageUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleImageUpdateManyWithWhereWithoutArticleInput | ArticleImageUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleImageScalarWhereInput | ArticleImageScalarWhereInput[]
  }

  export type ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput> | ArticleLikeCreateWithoutArticleInput[] | ArticleLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutArticleInput | ArticleLikeCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleLikeUpsertWithWhereUniqueWithoutArticleInput | ArticleLikeUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleLikeCreateManyArticleInputEnvelope
    set?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    disconnect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    delete?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    update?: ArticleLikeUpdateWithWhereUniqueWithoutArticleInput | ArticleLikeUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleLikeUpdateManyWithWhereWithoutArticleInput | ArticleLikeUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
  }

  export type ArticleCommentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleCommentCreateWithoutArticleInput, ArticleCommentUncheckedCreateWithoutArticleInput> | ArticleCommentCreateWithoutArticleInput[] | ArticleCommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutArticleInput | ArticleCommentCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleCommentUpsertWithWhereUniqueWithoutArticleInput | ArticleCommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleCommentCreateManyArticleInputEnvelope
    set?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    disconnect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    delete?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    update?: ArticleCommentUpdateWithWhereUniqueWithoutArticleInput | ArticleCommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleCommentUpdateManyWithWhereWithoutArticleInput | ArticleCommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleCommentScalarWhereInput | ArticleCommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutArticleCommentInput = {
    create?: XOR<UserCreateWithoutArticleCommentInput, UserUncheckedCreateWithoutArticleCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleCommentInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleCreateNestedOneWithoutArticleCommentInput = {
    create?: XOR<ArticleCreateWithoutArticleCommentInput, ArticleUncheckedCreateWithoutArticleCommentInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutArticleCommentInput
    connect?: ArticleWhereUniqueInput
  }

  export type ArticleCommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ArticleCommentCreateWithoutRepliesInput, ArticleCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutRepliesInput
    connect?: ArticleCommentWhereUniqueInput
  }

  export type ArticleCommentCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<ArticleCommentCreateWithoutParentCommentInput, ArticleCommentUncheckedCreateWithoutParentCommentInput> | ArticleCommentCreateWithoutParentCommentInput[] | ArticleCommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutParentCommentInput | ArticleCommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: ArticleCommentCreateManyParentCommentInputEnvelope
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
  }

  export type ArticleCommentLikeCreateNestedManyWithoutArticleCommentInput = {
    create?: XOR<ArticleCommentLikeCreateWithoutArticleCommentInput, ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput> | ArticleCommentLikeCreateWithoutArticleCommentInput[] | ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput[]
    connectOrCreate?: ArticleCommentLikeCreateOrConnectWithoutArticleCommentInput | ArticleCommentLikeCreateOrConnectWithoutArticleCommentInput[]
    createMany?: ArticleCommentLikeCreateManyArticleCommentInputEnvelope
    connect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
  }

  export type ArticleCommentUncheckedCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<ArticleCommentCreateWithoutParentCommentInput, ArticleCommentUncheckedCreateWithoutParentCommentInput> | ArticleCommentCreateWithoutParentCommentInput[] | ArticleCommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutParentCommentInput | ArticleCommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: ArticleCommentCreateManyParentCommentInputEnvelope
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
  }

  export type ArticleCommentLikeUncheckedCreateNestedManyWithoutArticleCommentInput = {
    create?: XOR<ArticleCommentLikeCreateWithoutArticleCommentInput, ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput> | ArticleCommentLikeCreateWithoutArticleCommentInput[] | ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput[]
    connectOrCreate?: ArticleCommentLikeCreateOrConnectWithoutArticleCommentInput | ArticleCommentLikeCreateOrConnectWithoutArticleCommentInput[]
    createMany?: ArticleCommentLikeCreateManyArticleCommentInputEnvelope
    connect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutArticleCommentNestedInput = {
    create?: XOR<UserCreateWithoutArticleCommentInput, UserUncheckedCreateWithoutArticleCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleCommentInput
    upsert?: UserUpsertWithoutArticleCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticleCommentInput, UserUpdateWithoutArticleCommentInput>, UserUncheckedUpdateWithoutArticleCommentInput>
  }

  export type ArticleUpdateOneRequiredWithoutArticleCommentNestedInput = {
    create?: XOR<ArticleCreateWithoutArticleCommentInput, ArticleUncheckedCreateWithoutArticleCommentInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutArticleCommentInput
    upsert?: ArticleUpsertWithoutArticleCommentInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutArticleCommentInput, ArticleUpdateWithoutArticleCommentInput>, ArticleUncheckedUpdateWithoutArticleCommentInput>
  }

  export type ArticleCommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ArticleCommentCreateWithoutRepliesInput, ArticleCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutRepliesInput
    upsert?: ArticleCommentUpsertWithoutRepliesInput
    disconnect?: ArticleCommentWhereInput | boolean
    delete?: ArticleCommentWhereInput | boolean
    connect?: ArticleCommentWhereUniqueInput
    update?: XOR<XOR<ArticleCommentUpdateToOneWithWhereWithoutRepliesInput, ArticleCommentUpdateWithoutRepliesInput>, ArticleCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type ArticleCommentUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<ArticleCommentCreateWithoutParentCommentInput, ArticleCommentUncheckedCreateWithoutParentCommentInput> | ArticleCommentCreateWithoutParentCommentInput[] | ArticleCommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutParentCommentInput | ArticleCommentCreateOrConnectWithoutParentCommentInput[]
    upsert?: ArticleCommentUpsertWithWhereUniqueWithoutParentCommentInput | ArticleCommentUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: ArticleCommentCreateManyParentCommentInputEnvelope
    set?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    disconnect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    delete?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    update?: ArticleCommentUpdateWithWhereUniqueWithoutParentCommentInput | ArticleCommentUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: ArticleCommentUpdateManyWithWhereWithoutParentCommentInput | ArticleCommentUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: ArticleCommentScalarWhereInput | ArticleCommentScalarWhereInput[]
  }

  export type ArticleCommentLikeUpdateManyWithoutArticleCommentNestedInput = {
    create?: XOR<ArticleCommentLikeCreateWithoutArticleCommentInput, ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput> | ArticleCommentLikeCreateWithoutArticleCommentInput[] | ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput[]
    connectOrCreate?: ArticleCommentLikeCreateOrConnectWithoutArticleCommentInput | ArticleCommentLikeCreateOrConnectWithoutArticleCommentInput[]
    upsert?: ArticleCommentLikeUpsertWithWhereUniqueWithoutArticleCommentInput | ArticleCommentLikeUpsertWithWhereUniqueWithoutArticleCommentInput[]
    createMany?: ArticleCommentLikeCreateManyArticleCommentInputEnvelope
    set?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    disconnect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    delete?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    connect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    update?: ArticleCommentLikeUpdateWithWhereUniqueWithoutArticleCommentInput | ArticleCommentLikeUpdateWithWhereUniqueWithoutArticleCommentInput[]
    updateMany?: ArticleCommentLikeUpdateManyWithWhereWithoutArticleCommentInput | ArticleCommentLikeUpdateManyWithWhereWithoutArticleCommentInput[]
    deleteMany?: ArticleCommentLikeScalarWhereInput | ArticleCommentLikeScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ArticleCommentUncheckedUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<ArticleCommentCreateWithoutParentCommentInput, ArticleCommentUncheckedCreateWithoutParentCommentInput> | ArticleCommentCreateWithoutParentCommentInput[] | ArticleCommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutParentCommentInput | ArticleCommentCreateOrConnectWithoutParentCommentInput[]
    upsert?: ArticleCommentUpsertWithWhereUniqueWithoutParentCommentInput | ArticleCommentUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: ArticleCommentCreateManyParentCommentInputEnvelope
    set?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    disconnect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    delete?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    update?: ArticleCommentUpdateWithWhereUniqueWithoutParentCommentInput | ArticleCommentUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: ArticleCommentUpdateManyWithWhereWithoutParentCommentInput | ArticleCommentUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: ArticleCommentScalarWhereInput | ArticleCommentScalarWhereInput[]
  }

  export type ArticleCommentLikeUncheckedUpdateManyWithoutArticleCommentNestedInput = {
    create?: XOR<ArticleCommentLikeCreateWithoutArticleCommentInput, ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput> | ArticleCommentLikeCreateWithoutArticleCommentInput[] | ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput[]
    connectOrCreate?: ArticleCommentLikeCreateOrConnectWithoutArticleCommentInput | ArticleCommentLikeCreateOrConnectWithoutArticleCommentInput[]
    upsert?: ArticleCommentLikeUpsertWithWhereUniqueWithoutArticleCommentInput | ArticleCommentLikeUpsertWithWhereUniqueWithoutArticleCommentInput[]
    createMany?: ArticleCommentLikeCreateManyArticleCommentInputEnvelope
    set?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    disconnect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    delete?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    connect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    update?: ArticleCommentLikeUpdateWithWhereUniqueWithoutArticleCommentInput | ArticleCommentLikeUpdateWithWhereUniqueWithoutArticleCommentInput[]
    updateMany?: ArticleCommentLikeUpdateManyWithWhereWithoutArticleCommentInput | ArticleCommentLikeUpdateManyWithWhereWithoutArticleCommentInput[]
    deleteMany?: ArticleCommentLikeScalarWhereInput | ArticleCommentLikeScalarWhereInput[]
  }

  export type ArticleCommentCreateNestedOneWithoutArticleCommentLikeInput = {
    create?: XOR<ArticleCommentCreateWithoutArticleCommentLikeInput, ArticleCommentUncheckedCreateWithoutArticleCommentLikeInput>
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutArticleCommentLikeInput
    connect?: ArticleCommentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArticleCommentLikeInput = {
    create?: XOR<UserCreateWithoutArticleCommentLikeInput, UserUncheckedCreateWithoutArticleCommentLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleCommentLikeInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleCommentUpdateOneRequiredWithoutArticleCommentLikeNestedInput = {
    create?: XOR<ArticleCommentCreateWithoutArticleCommentLikeInput, ArticleCommentUncheckedCreateWithoutArticleCommentLikeInput>
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutArticleCommentLikeInput
    upsert?: ArticleCommentUpsertWithoutArticleCommentLikeInput
    connect?: ArticleCommentWhereUniqueInput
    update?: XOR<XOR<ArticleCommentUpdateToOneWithWhereWithoutArticleCommentLikeInput, ArticleCommentUpdateWithoutArticleCommentLikeInput>, ArticleCommentUncheckedUpdateWithoutArticleCommentLikeInput>
  }

  export type UserUpdateOneRequiredWithoutArticleCommentLikeNestedInput = {
    create?: XOR<UserCreateWithoutArticleCommentLikeInput, UserUncheckedCreateWithoutArticleCommentLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleCommentLikeInput
    upsert?: UserUpsertWithoutArticleCommentLikeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticleCommentLikeInput, UserUpdateWithoutArticleCommentLikeInput>, UserUncheckedUpdateWithoutArticleCommentLikeInput>
  }

  export type ArticleCreateNestedOneWithoutArticleImageInput = {
    create?: XOR<ArticleCreateWithoutArticleImageInput, ArticleUncheckedCreateWithoutArticleImageInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutArticleImageInput
    connect?: ArticleWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticleUpdateOneRequiredWithoutArticleImageNestedInput = {
    create?: XOR<ArticleCreateWithoutArticleImageInput, ArticleUncheckedCreateWithoutArticleImageInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutArticleImageInput
    upsert?: ArticleUpsertWithoutArticleImageInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutArticleImageInput, ArticleUpdateWithoutArticleImageInput>, ArticleUncheckedUpdateWithoutArticleImageInput>
  }

  export type ArticleCreateNestedOneWithoutArticleLikeInput = {
    create?: XOR<ArticleCreateWithoutArticleLikeInput, ArticleUncheckedCreateWithoutArticleLikeInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutArticleLikeInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArticleLikeInput = {
    create?: XOR<UserCreateWithoutArticleLikeInput, UserUncheckedCreateWithoutArticleLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleLikeInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutArticleLikeNestedInput = {
    create?: XOR<ArticleCreateWithoutArticleLikeInput, ArticleUncheckedCreateWithoutArticleLikeInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutArticleLikeInput
    upsert?: ArticleUpsertWithoutArticleLikeInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutArticleLikeInput, ArticleUpdateWithoutArticleLikeInput>, ArticleUncheckedUpdateWithoutArticleLikeInput>
  }

  export type UserUpdateOneRequiredWithoutArticleLikeNestedInput = {
    create?: XOR<UserCreateWithoutArticleLikeInput, UserUncheckedCreateWithoutArticleLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleLikeInput
    upsert?: UserUpsertWithoutArticleLikeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticleLikeInput, UserUpdateWithoutArticleLikeInput>, UserUncheckedUpdateWithoutArticleLikeInput>
  }

  export type ArticleCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ArticleCreateWithoutCommunityInput, ArticleUncheckedCreateWithoutCommunityInput> | ArticleCreateWithoutCommunityInput[] | ArticleUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCommunityInput | ArticleCreateOrConnectWithoutCommunityInput[]
    createMany?: ArticleCreateManyCommunityInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ArticleCreateWithoutCommunityInput, ArticleUncheckedCreateWithoutCommunityInput> | ArticleCreateWithoutCommunityInput[] | ArticleUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCommunityInput | ArticleCreateOrConnectWithoutCommunityInput[]
    createMany?: ArticleCreateManyCommunityInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ArticleCreateWithoutCommunityInput, ArticleUncheckedCreateWithoutCommunityInput> | ArticleCreateWithoutCommunityInput[] | ArticleUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCommunityInput | ArticleCreateOrConnectWithoutCommunityInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutCommunityInput | ArticleUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ArticleCreateManyCommunityInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutCommunityInput | ArticleUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutCommunityInput | ArticleUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ArticleCreateWithoutCommunityInput, ArticleUncheckedCreateWithoutCommunityInput> | ArticleCreateWithoutCommunityInput[] | ArticleUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCommunityInput | ArticleCreateOrConnectWithoutCommunityInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutCommunityInput | ArticleUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ArticleCreateManyCommunityInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutCommunityInput | ArticleUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutCommunityInput | ArticleUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    connect?: UserWhereUniqueInput
  }

  export type EventImageCreateNestedManyWithoutEventInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type EventScrapCreateNestedManyWithoutEventInput = {
    create?: XOR<EventScrapCreateWithoutEventInput, EventScrapUncheckedCreateWithoutEventInput> | EventScrapCreateWithoutEventInput[] | EventScrapUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScrapCreateOrConnectWithoutEventInput | EventScrapCreateOrConnectWithoutEventInput[]
    createMany?: EventScrapCreateManyEventInputEnvelope
    connect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
  }

  export type EventImageUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type EventScrapUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventScrapCreateWithoutEventInput, EventScrapUncheckedCreateWithoutEventInput> | EventScrapCreateWithoutEventInput[] | EventScrapUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScrapCreateOrConnectWithoutEventInput | EventScrapCreateOrConnectWithoutEventInput[]
    createMany?: EventScrapCreateManyEventInputEnvelope
    connect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    upsert?: UserUpsertWithoutEventInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventInput, UserUpdateWithoutEventInput>, UserUncheckedUpdateWithoutEventInput>
  }

  export type EventImageUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutEventInput | EventImageUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutEventInput | EventImageUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutEventInput | EventImageUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type EventScrapUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventScrapCreateWithoutEventInput, EventScrapUncheckedCreateWithoutEventInput> | EventScrapCreateWithoutEventInput[] | EventScrapUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScrapCreateOrConnectWithoutEventInput | EventScrapCreateOrConnectWithoutEventInput[]
    upsert?: EventScrapUpsertWithWhereUniqueWithoutEventInput | EventScrapUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventScrapCreateManyEventInputEnvelope
    set?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    disconnect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    delete?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    connect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    update?: EventScrapUpdateWithWhereUniqueWithoutEventInput | EventScrapUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventScrapUpdateManyWithWhereWithoutEventInput | EventScrapUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventScrapScalarWhereInput | EventScrapScalarWhereInput[]
  }

  export type EventImageUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutEventInput | EventImageUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutEventInput | EventImageUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutEventInput | EventImageUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type EventScrapUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventScrapCreateWithoutEventInput, EventScrapUncheckedCreateWithoutEventInput> | EventScrapCreateWithoutEventInput[] | EventScrapUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScrapCreateOrConnectWithoutEventInput | EventScrapCreateOrConnectWithoutEventInput[]
    upsert?: EventScrapUpsertWithWhereUniqueWithoutEventInput | EventScrapUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventScrapCreateManyEventInputEnvelope
    set?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    disconnect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    delete?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    connect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    update?: EventScrapUpdateWithWhereUniqueWithoutEventInput | EventScrapUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventScrapUpdateManyWithWhereWithoutEventInput | EventScrapUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventScrapScalarWhereInput | EventScrapScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutEventImageInput = {
    create?: XOR<EventCreateWithoutEventImageInput, EventUncheckedCreateWithoutEventImageInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventImageInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutEventImageNestedInput = {
    create?: XOR<EventCreateWithoutEventImageInput, EventUncheckedCreateWithoutEventImageInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventImageInput
    upsert?: EventUpsertWithoutEventImageInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventImageInput, EventUpdateWithoutEventImageInput>, EventUncheckedUpdateWithoutEventImageInput>
  }

  export type UserCreateNestedOneWithoutEventScrapInput = {
    create?: XOR<UserCreateWithoutEventScrapInput, UserUncheckedCreateWithoutEventScrapInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventScrapInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutEventScrapInput = {
    create?: XOR<EventCreateWithoutEventScrapInput, EventUncheckedCreateWithoutEventScrapInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventScrapInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEventScrapNestedInput = {
    create?: XOR<UserCreateWithoutEventScrapInput, UserUncheckedCreateWithoutEventScrapInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventScrapInput
    upsert?: UserUpsertWithoutEventScrapInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventScrapInput, UserUpdateWithoutEventScrapInput>, UserUncheckedUpdateWithoutEventScrapInput>
  }

  export type EventUpdateOneRequiredWithoutEventScrapNestedInput = {
    create?: XOR<EventCreateWithoutEventScrapInput, EventUncheckedCreateWithoutEventScrapInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventScrapInput
    upsert?: EventUpsertWithoutEventScrapInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventScrapInput, EventUpdateWithoutEventScrapInput>, EventUncheckedUpdateWithoutEventScrapInput>
  }

  export type UserTermCreateNestedManyWithoutTermInput = {
    create?: XOR<UserTermCreateWithoutTermInput, UserTermUncheckedCreateWithoutTermInput> | UserTermCreateWithoutTermInput[] | UserTermUncheckedCreateWithoutTermInput[]
    connectOrCreate?: UserTermCreateOrConnectWithoutTermInput | UserTermCreateOrConnectWithoutTermInput[]
    createMany?: UserTermCreateManyTermInputEnvelope
    connect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
  }

  export type UserTermUncheckedCreateNestedManyWithoutTermInput = {
    create?: XOR<UserTermCreateWithoutTermInput, UserTermUncheckedCreateWithoutTermInput> | UserTermCreateWithoutTermInput[] | UserTermUncheckedCreateWithoutTermInput[]
    connectOrCreate?: UserTermCreateOrConnectWithoutTermInput | UserTermCreateOrConnectWithoutTermInput[]
    createMany?: UserTermCreateManyTermInputEnvelope
    connect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
  }

  export type UserTermUpdateManyWithoutTermNestedInput = {
    create?: XOR<UserTermCreateWithoutTermInput, UserTermUncheckedCreateWithoutTermInput> | UserTermCreateWithoutTermInput[] | UserTermUncheckedCreateWithoutTermInput[]
    connectOrCreate?: UserTermCreateOrConnectWithoutTermInput | UserTermCreateOrConnectWithoutTermInput[]
    upsert?: UserTermUpsertWithWhereUniqueWithoutTermInput | UserTermUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: UserTermCreateManyTermInputEnvelope
    set?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    disconnect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    delete?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    connect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    update?: UserTermUpdateWithWhereUniqueWithoutTermInput | UserTermUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: UserTermUpdateManyWithWhereWithoutTermInput | UserTermUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: UserTermScalarWhereInput | UserTermScalarWhereInput[]
  }

  export type UserTermUncheckedUpdateManyWithoutTermNestedInput = {
    create?: XOR<UserTermCreateWithoutTermInput, UserTermUncheckedCreateWithoutTermInput> | UserTermCreateWithoutTermInput[] | UserTermUncheckedCreateWithoutTermInput[]
    connectOrCreate?: UserTermCreateOrConnectWithoutTermInput | UserTermCreateOrConnectWithoutTermInput[]
    upsert?: UserTermUpsertWithWhereUniqueWithoutTermInput | UserTermUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: UserTermCreateManyTermInputEnvelope
    set?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    disconnect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    delete?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    connect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    update?: UserTermUpdateWithWhereUniqueWithoutTermInput | UserTermUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: UserTermUpdateManyWithWhereWithoutTermInput | UserTermUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: UserTermScalarWhereInput | UserTermScalarWhereInput[]
  }

  export type ArticleCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCommentCreateWithoutUserInput, ArticleCommentUncheckedCreateWithoutUserInput> | ArticleCommentCreateWithoutUserInput[] | ArticleCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutUserInput | ArticleCommentCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCommentCreateManyUserInputEnvelope
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
  }

  export type ArticleCommentLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCommentLikeCreateWithoutUserInput, ArticleCommentLikeUncheckedCreateWithoutUserInput> | ArticleCommentLikeCreateWithoutUserInput[] | ArticleCommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCommentLikeCreateOrConnectWithoutUserInput | ArticleCommentLikeCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCommentLikeCreateManyUserInputEnvelope
    connect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
  }

  export type ArticleLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput> | ArticleLikeCreateWithoutUserInput[] | ArticleLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutUserInput | ArticleLikeCreateOrConnectWithoutUserInput[]
    createMany?: ArticleLikeCreateManyUserInputEnvelope
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventScrapCreateNestedManyWithoutUserInput = {
    create?: XOR<EventScrapCreateWithoutUserInput, EventScrapUncheckedCreateWithoutUserInput> | EventScrapCreateWithoutUserInput[] | EventScrapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventScrapCreateOrConnectWithoutUserInput | EventScrapCreateOrConnectWithoutUserInput[]
    createMany?: EventScrapCreateManyUserInputEnvelope
    connect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
  }

  export type UserTermCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTermCreateWithoutUserInput, UserTermUncheckedCreateWithoutUserInput> | UserTermCreateWithoutUserInput[] | UserTermUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTermCreateOrConnectWithoutUserInput | UserTermCreateOrConnectWithoutUserInput[]
    createMany?: UserTermCreateManyUserInputEnvelope
    connect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCommentCreateWithoutUserInput, ArticleCommentUncheckedCreateWithoutUserInput> | ArticleCommentCreateWithoutUserInput[] | ArticleCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutUserInput | ArticleCommentCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCommentCreateManyUserInputEnvelope
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
  }

  export type ArticleCommentLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCommentLikeCreateWithoutUserInput, ArticleCommentLikeUncheckedCreateWithoutUserInput> | ArticleCommentLikeCreateWithoutUserInput[] | ArticleCommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCommentLikeCreateOrConnectWithoutUserInput | ArticleCommentLikeCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCommentLikeCreateManyUserInputEnvelope
    connect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
  }

  export type ArticleLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput> | ArticleLikeCreateWithoutUserInput[] | ArticleLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutUserInput | ArticleLikeCreateOrConnectWithoutUserInput[]
    createMany?: ArticleLikeCreateManyUserInputEnvelope
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventScrapUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventScrapCreateWithoutUserInput, EventScrapUncheckedCreateWithoutUserInput> | EventScrapCreateWithoutUserInput[] | EventScrapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventScrapCreateOrConnectWithoutUserInput | EventScrapCreateOrConnectWithoutUserInput[]
    createMany?: EventScrapCreateManyUserInputEnvelope
    connect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
  }

  export type UserTermUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTermCreateWithoutUserInput, UserTermUncheckedCreateWithoutUserInput> | UserTermCreateWithoutUserInput[] | UserTermUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTermCreateOrConnectWithoutUserInput | UserTermCreateOrConnectWithoutUserInput[]
    createMany?: UserTermCreateManyUserInputEnvelope
    connect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ArticleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCommentCreateWithoutUserInput, ArticleCommentUncheckedCreateWithoutUserInput> | ArticleCommentCreateWithoutUserInput[] | ArticleCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutUserInput | ArticleCommentCreateOrConnectWithoutUserInput[]
    upsert?: ArticleCommentUpsertWithWhereUniqueWithoutUserInput | ArticleCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCommentCreateManyUserInputEnvelope
    set?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    disconnect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    delete?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    update?: ArticleCommentUpdateWithWhereUniqueWithoutUserInput | ArticleCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleCommentUpdateManyWithWhereWithoutUserInput | ArticleCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleCommentScalarWhereInput | ArticleCommentScalarWhereInput[]
  }

  export type ArticleCommentLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCommentLikeCreateWithoutUserInput, ArticleCommentLikeUncheckedCreateWithoutUserInput> | ArticleCommentLikeCreateWithoutUserInput[] | ArticleCommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCommentLikeCreateOrConnectWithoutUserInput | ArticleCommentLikeCreateOrConnectWithoutUserInput[]
    upsert?: ArticleCommentLikeUpsertWithWhereUniqueWithoutUserInput | ArticleCommentLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCommentLikeCreateManyUserInputEnvelope
    set?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    disconnect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    delete?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    connect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    update?: ArticleCommentLikeUpdateWithWhereUniqueWithoutUserInput | ArticleCommentLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleCommentLikeUpdateManyWithWhereWithoutUserInput | ArticleCommentLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleCommentLikeScalarWhereInput | ArticleCommentLikeScalarWhereInput[]
  }

  export type ArticleLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput> | ArticleLikeCreateWithoutUserInput[] | ArticleLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutUserInput | ArticleLikeCreateOrConnectWithoutUserInput[]
    upsert?: ArticleLikeUpsertWithWhereUniqueWithoutUserInput | ArticleLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleLikeCreateManyUserInputEnvelope
    set?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    disconnect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    delete?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    update?: ArticleLikeUpdateWithWhereUniqueWithoutUserInput | ArticleLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleLikeUpdateManyWithWhereWithoutUserInput | ArticleLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventScrapUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventScrapCreateWithoutUserInput, EventScrapUncheckedCreateWithoutUserInput> | EventScrapCreateWithoutUserInput[] | EventScrapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventScrapCreateOrConnectWithoutUserInput | EventScrapCreateOrConnectWithoutUserInput[]
    upsert?: EventScrapUpsertWithWhereUniqueWithoutUserInput | EventScrapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventScrapCreateManyUserInputEnvelope
    set?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    disconnect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    delete?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    connect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    update?: EventScrapUpdateWithWhereUniqueWithoutUserInput | EventScrapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventScrapUpdateManyWithWhereWithoutUserInput | EventScrapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScrapScalarWhereInput | EventScrapScalarWhereInput[]
  }

  export type UserTermUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTermCreateWithoutUserInput, UserTermUncheckedCreateWithoutUserInput> | UserTermCreateWithoutUserInput[] | UserTermUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTermCreateOrConnectWithoutUserInput | UserTermCreateOrConnectWithoutUserInput[]
    upsert?: UserTermUpsertWithWhereUniqueWithoutUserInput | UserTermUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTermCreateManyUserInputEnvelope
    set?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    disconnect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    delete?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    connect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    update?: UserTermUpdateWithWhereUniqueWithoutUserInput | UserTermUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTermUpdateManyWithWhereWithoutUserInput | UserTermUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTermScalarWhereInput | UserTermScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCommentCreateWithoutUserInput, ArticleCommentUncheckedCreateWithoutUserInput> | ArticleCommentCreateWithoutUserInput[] | ArticleCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCommentCreateOrConnectWithoutUserInput | ArticleCommentCreateOrConnectWithoutUserInput[]
    upsert?: ArticleCommentUpsertWithWhereUniqueWithoutUserInput | ArticleCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCommentCreateManyUserInputEnvelope
    set?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    disconnect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    delete?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    connect?: ArticleCommentWhereUniqueInput | ArticleCommentWhereUniqueInput[]
    update?: ArticleCommentUpdateWithWhereUniqueWithoutUserInput | ArticleCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleCommentUpdateManyWithWhereWithoutUserInput | ArticleCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleCommentScalarWhereInput | ArticleCommentScalarWhereInput[]
  }

  export type ArticleCommentLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCommentLikeCreateWithoutUserInput, ArticleCommentLikeUncheckedCreateWithoutUserInput> | ArticleCommentLikeCreateWithoutUserInput[] | ArticleCommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCommentLikeCreateOrConnectWithoutUserInput | ArticleCommentLikeCreateOrConnectWithoutUserInput[]
    upsert?: ArticleCommentLikeUpsertWithWhereUniqueWithoutUserInput | ArticleCommentLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCommentLikeCreateManyUserInputEnvelope
    set?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    disconnect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    delete?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    connect?: ArticleCommentLikeWhereUniqueInput | ArticleCommentLikeWhereUniqueInput[]
    update?: ArticleCommentLikeUpdateWithWhereUniqueWithoutUserInput | ArticleCommentLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleCommentLikeUpdateManyWithWhereWithoutUserInput | ArticleCommentLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleCommentLikeScalarWhereInput | ArticleCommentLikeScalarWhereInput[]
  }

  export type ArticleLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput> | ArticleLikeCreateWithoutUserInput[] | ArticleLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutUserInput | ArticleLikeCreateOrConnectWithoutUserInput[]
    upsert?: ArticleLikeUpsertWithWhereUniqueWithoutUserInput | ArticleLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleLikeCreateManyUserInputEnvelope
    set?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    disconnect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    delete?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    update?: ArticleLikeUpdateWithWhereUniqueWithoutUserInput | ArticleLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleLikeUpdateManyWithWhereWithoutUserInput | ArticleLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventScrapUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventScrapCreateWithoutUserInput, EventScrapUncheckedCreateWithoutUserInput> | EventScrapCreateWithoutUserInput[] | EventScrapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventScrapCreateOrConnectWithoutUserInput | EventScrapCreateOrConnectWithoutUserInput[]
    upsert?: EventScrapUpsertWithWhereUniqueWithoutUserInput | EventScrapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventScrapCreateManyUserInputEnvelope
    set?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    disconnect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    delete?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    connect?: EventScrapWhereUniqueInput | EventScrapWhereUniqueInput[]
    update?: EventScrapUpdateWithWhereUniqueWithoutUserInput | EventScrapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventScrapUpdateManyWithWhereWithoutUserInput | EventScrapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScrapScalarWhereInput | EventScrapScalarWhereInput[]
  }

  export type UserTermUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTermCreateWithoutUserInput, UserTermUncheckedCreateWithoutUserInput> | UserTermCreateWithoutUserInput[] | UserTermUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTermCreateOrConnectWithoutUserInput | UserTermCreateOrConnectWithoutUserInput[]
    upsert?: UserTermUpsertWithWhereUniqueWithoutUserInput | UserTermUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTermCreateManyUserInputEnvelope
    set?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    disconnect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    delete?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    connect?: UserTermWhereUniqueInput | UserTermWhereUniqueInput[]
    update?: UserTermUpdateWithWhereUniqueWithoutUserInput | UserTermUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTermUpdateManyWithWhereWithoutUserInput | UserTermUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTermScalarWhereInput | UserTermScalarWhereInput[]
  }

  export type TermCreateNestedOneWithoutUserTermInput = {
    create?: XOR<TermCreateWithoutUserTermInput, TermUncheckedCreateWithoutUserTermInput>
    connectOrCreate?: TermCreateOrConnectWithoutUserTermInput
    connect?: TermWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserTermInput = {
    create?: XOR<UserCreateWithoutUserTermInput, UserUncheckedCreateWithoutUserTermInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTermInput
    connect?: UserWhereUniqueInput
  }

  export type TermUpdateOneRequiredWithoutUserTermNestedInput = {
    create?: XOR<TermCreateWithoutUserTermInput, TermUncheckedCreateWithoutUserTermInput>
    connectOrCreate?: TermCreateOrConnectWithoutUserTermInput
    upsert?: TermUpsertWithoutUserTermInput
    connect?: TermWhereUniqueInput
    update?: XOR<XOR<TermUpdateToOneWithWhereWithoutUserTermInput, TermUpdateWithoutUserTermInput>, TermUncheckedUpdateWithoutUserTermInput>
  }

  export type UserUpdateOneRequiredWithoutUserTermNestedInput = {
    create?: XOR<UserCreateWithoutUserTermInput, UserUncheckedCreateWithoutUserTermInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTermInput
    upsert?: UserUpsertWithoutUserTermInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTermInput, UserUpdateWithoutUserTermInput>, UserUncheckedUpdateWithoutUserTermInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutArticleInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articleComment?: ArticleCommentCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeCreateNestedManyWithoutUserInput
    event?: EventCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapCreateNestedManyWithoutUserInput
    userTerm?: UserTermCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticleInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articleComment?: ArticleCommentUncheckedCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    event?: EventUncheckedCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutUserInput
    userTerm?: UserTermUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticleInput, UserUncheckedCreateWithoutArticleInput>
  }

  export type CommunityCreateWithoutArticleInput = {
    id?: bigint | number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUncheckedCreateWithoutArticleInput = {
    id?: bigint | number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityCreateOrConnectWithoutArticleInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutArticleInput, CommunityUncheckedCreateWithoutArticleInput>
  }

  export type ArticleImageCreateWithoutArticleInput = {
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleImageUncheckedCreateWithoutArticleInput = {
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleImageCreateOrConnectWithoutArticleInput = {
    where: ArticleImageWhereUniqueInput
    create: XOR<ArticleImageCreateWithoutArticleInput, ArticleImageUncheckedCreateWithoutArticleInput>
  }

  export type ArticleImageCreateManyArticleInputEnvelope = {
    data: ArticleImageCreateManyArticleInput | ArticleImageCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleLikeCreateWithoutArticleInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleLikeInput
  }

  export type ArticleLikeUncheckedCreateWithoutArticleInput = {
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleLikeCreateOrConnectWithoutArticleInput = {
    where: ArticleLikeWhereUniqueInput
    create: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput>
  }

  export type ArticleLikeCreateManyArticleInputEnvelope = {
    data: ArticleLikeCreateManyArticleInput | ArticleLikeCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleCommentCreateWithoutArticleInput = {
    id?: bigint | number
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleCommentInput
    parentComment?: ArticleCommentCreateNestedOneWithoutRepliesInput
    replies?: ArticleCommentCreateNestedManyWithoutParentCommentInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentUncheckedCreateWithoutArticleInput = {
    id?: bigint | number
    parentCommentId?: bigint | number | null
    content: string
    authorId: bigint | number
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ArticleCommentUncheckedCreateNestedManyWithoutParentCommentInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentCreateOrConnectWithoutArticleInput = {
    where: ArticleCommentWhereUniqueInput
    create: XOR<ArticleCommentCreateWithoutArticleInput, ArticleCommentUncheckedCreateWithoutArticleInput>
  }

  export type ArticleCommentCreateManyArticleInputEnvelope = {
    data: ArticleCommentCreateManyArticleInput | ArticleCommentCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArticleInput = {
    update: XOR<UserUpdateWithoutArticleInput, UserUncheckedUpdateWithoutArticleInput>
    create: XOR<UserCreateWithoutArticleInput, UserUncheckedCreateWithoutArticleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticleInput, UserUncheckedUpdateWithoutArticleInput>
  }

  export type UserUpdateWithoutArticleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleComment?: ArticleCommentUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutUserNestedInput
    event?: EventUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleComment?: ArticleCommentUncheckedUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    event?: EventUncheckedUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUncheckedUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityUpsertWithoutArticleInput = {
    update: XOR<CommunityUpdateWithoutArticleInput, CommunityUncheckedUpdateWithoutArticleInput>
    create: XOR<CommunityCreateWithoutArticleInput, CommunityUncheckedCreateWithoutArticleInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutArticleInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutArticleInput, CommunityUncheckedUpdateWithoutArticleInput>
  }

  export type CommunityUpdateWithoutArticleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateWithoutArticleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleImageUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleImageWhereUniqueInput
    update: XOR<ArticleImageUpdateWithoutArticleInput, ArticleImageUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleImageCreateWithoutArticleInput, ArticleImageUncheckedCreateWithoutArticleInput>
  }

  export type ArticleImageUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleImageWhereUniqueInput
    data: XOR<ArticleImageUpdateWithoutArticleInput, ArticleImageUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleImageUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleImageScalarWhereInput
    data: XOR<ArticleImageUpdateManyMutationInput, ArticleImageUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleImageScalarWhereInput = {
    AND?: ArticleImageScalarWhereInput | ArticleImageScalarWhereInput[]
    OR?: ArticleImageScalarWhereInput[]
    NOT?: ArticleImageScalarWhereInput | ArticleImageScalarWhereInput[]
    articleId?: BigIntFilter<"ArticleImage"> | bigint | number
    imageUrl?: StringFilter<"ArticleImage"> | string
    order?: IntFilter<"ArticleImage"> | number
    createdAt?: DateTimeFilter<"ArticleImage"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleImage"> | Date | string
  }

  export type ArticleLikeUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleLikeWhereUniqueInput
    update: XOR<ArticleLikeUpdateWithoutArticleInput, ArticleLikeUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput>
  }

  export type ArticleLikeUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleLikeWhereUniqueInput
    data: XOR<ArticleLikeUpdateWithoutArticleInput, ArticleLikeUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleLikeUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleLikeScalarWhereInput
    data: XOR<ArticleLikeUpdateManyMutationInput, ArticleLikeUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleLikeScalarWhereInput = {
    AND?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
    OR?: ArticleLikeScalarWhereInput[]
    NOT?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
    articleId?: BigIntFilter<"ArticleLike"> | bigint | number
    userId?: BigIntFilter<"ArticleLike"> | bigint | number
    createdAt?: DateTimeFilter<"ArticleLike"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleLike"> | Date | string
  }

  export type ArticleCommentUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleCommentWhereUniqueInput
    update: XOR<ArticleCommentUpdateWithoutArticleInput, ArticleCommentUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleCommentCreateWithoutArticleInput, ArticleCommentUncheckedCreateWithoutArticleInput>
  }

  export type ArticleCommentUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleCommentWhereUniqueInput
    data: XOR<ArticleCommentUpdateWithoutArticleInput, ArticleCommentUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleCommentUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleCommentScalarWhereInput
    data: XOR<ArticleCommentUpdateManyMutationInput, ArticleCommentUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleCommentScalarWhereInput = {
    AND?: ArticleCommentScalarWhereInput | ArticleCommentScalarWhereInput[]
    OR?: ArticleCommentScalarWhereInput[]
    NOT?: ArticleCommentScalarWhereInput | ArticleCommentScalarWhereInput[]
    id?: BigIntFilter<"ArticleComment"> | bigint | number
    articleId?: BigIntFilter<"ArticleComment"> | bigint | number
    parentCommentId?: BigIntNullableFilter<"ArticleComment"> | bigint | number | null
    content?: StringFilter<"ArticleComment"> | string
    authorId?: BigIntFilter<"ArticleComment"> | bigint | number
    isAnonymous?: BoolFilter<"ArticleComment"> | boolean
    createdAt?: DateTimeFilter<"ArticleComment"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleComment"> | Date | string
  }

  export type UserCreateWithoutArticleCommentInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeCreateNestedManyWithoutUserInput
    event?: EventCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapCreateNestedManyWithoutUserInput
    userTerm?: UserTermCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticleCommentInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleUncheckedCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    event?: EventUncheckedCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutUserInput
    userTerm?: UserTermUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticleCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticleCommentInput, UserUncheckedCreateWithoutArticleCommentInput>
  }

  export type ArticleCreateWithoutArticleCommentInput = {
    id?: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleInput
    community: CommunityCreateNestedOneWithoutArticleInput
    articleImage?: ArticleImageCreateNestedManyWithoutArticleInput
    articleLike?: ArticleLikeCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutArticleCommentInput = {
    id?: bigint | number
    communityId: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    authorId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    articleImage?: ArticleImageUncheckedCreateNestedManyWithoutArticleInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutArticleCommentInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutArticleCommentInput, ArticleUncheckedCreateWithoutArticleCommentInput>
  }

  export type ArticleCommentCreateWithoutRepliesInput = {
    id?: bigint | number
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleCommentInput
    article: ArticleCreateNestedOneWithoutArticleCommentInput
    parentComment?: ArticleCommentCreateNestedOneWithoutRepliesInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentUncheckedCreateWithoutRepliesInput = {
    id?: bigint | number
    articleId: bigint | number
    parentCommentId?: bigint | number | null
    content: string
    authorId: bigint | number
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentCreateOrConnectWithoutRepliesInput = {
    where: ArticleCommentWhereUniqueInput
    create: XOR<ArticleCommentCreateWithoutRepliesInput, ArticleCommentUncheckedCreateWithoutRepliesInput>
  }

  export type ArticleCommentCreateWithoutParentCommentInput = {
    id?: bigint | number
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleCommentInput
    article: ArticleCreateNestedOneWithoutArticleCommentInput
    replies?: ArticleCommentCreateNestedManyWithoutParentCommentInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentUncheckedCreateWithoutParentCommentInput = {
    id?: bigint | number
    articleId: bigint | number
    content: string
    authorId: bigint | number
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ArticleCommentUncheckedCreateNestedManyWithoutParentCommentInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentCreateOrConnectWithoutParentCommentInput = {
    where: ArticleCommentWhereUniqueInput
    create: XOR<ArticleCommentCreateWithoutParentCommentInput, ArticleCommentUncheckedCreateWithoutParentCommentInput>
  }

  export type ArticleCommentCreateManyParentCommentInputEnvelope = {
    data: ArticleCommentCreateManyParentCommentInput | ArticleCommentCreateManyParentCommentInput[]
    skipDuplicates?: boolean
  }

  export type ArticleCommentLikeCreateWithoutArticleCommentInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleCommentLikeInput
  }

  export type ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput = {
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentLikeCreateOrConnectWithoutArticleCommentInput = {
    where: ArticleCommentLikeWhereUniqueInput
    create: XOR<ArticleCommentLikeCreateWithoutArticleCommentInput, ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput>
  }

  export type ArticleCommentLikeCreateManyArticleCommentInputEnvelope = {
    data: ArticleCommentLikeCreateManyArticleCommentInput | ArticleCommentLikeCreateManyArticleCommentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArticleCommentInput = {
    update: XOR<UserUpdateWithoutArticleCommentInput, UserUncheckedUpdateWithoutArticleCommentInput>
    create: XOR<UserCreateWithoutArticleCommentInput, UserUncheckedCreateWithoutArticleCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticleCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticleCommentInput, UserUncheckedUpdateWithoutArticleCommentInput>
  }

  export type UserUpdateWithoutArticleCommentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutUserNestedInput
    event?: EventUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticleCommentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    event?: EventUncheckedUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUncheckedUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleUpsertWithoutArticleCommentInput = {
    update: XOR<ArticleUpdateWithoutArticleCommentInput, ArticleUncheckedUpdateWithoutArticleCommentInput>
    create: XOR<ArticleCreateWithoutArticleCommentInput, ArticleUncheckedCreateWithoutArticleCommentInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutArticleCommentInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutArticleCommentInput, ArticleUncheckedUpdateWithoutArticleCommentInput>
  }

  export type ArticleUpdateWithoutArticleCommentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleNestedInput
    community?: CommunityUpdateOneRequiredWithoutArticleNestedInput
    articleImage?: ArticleImageUpdateManyWithoutArticleNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutArticleCommentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communityId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleImage?: ArticleImageUncheckedUpdateManyWithoutArticleNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCommentUpsertWithoutRepliesInput = {
    update: XOR<ArticleCommentUpdateWithoutRepliesInput, ArticleCommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<ArticleCommentCreateWithoutRepliesInput, ArticleCommentUncheckedCreateWithoutRepliesInput>
    where?: ArticleCommentWhereInput
  }

  export type ArticleCommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ArticleCommentWhereInput
    data: XOR<ArticleCommentUpdateWithoutRepliesInput, ArticleCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type ArticleCommentUpdateWithoutRepliesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleCommentNestedInput
    article?: ArticleUpdateOneRequiredWithoutArticleCommentNestedInput
    parentComment?: ArticleCommentUpdateOneWithoutRepliesNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentUncheckedUpdateWithoutRepliesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    parentCommentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentUpsertWithWhereUniqueWithoutParentCommentInput = {
    where: ArticleCommentWhereUniqueInput
    update: XOR<ArticleCommentUpdateWithoutParentCommentInput, ArticleCommentUncheckedUpdateWithoutParentCommentInput>
    create: XOR<ArticleCommentCreateWithoutParentCommentInput, ArticleCommentUncheckedCreateWithoutParentCommentInput>
  }

  export type ArticleCommentUpdateWithWhereUniqueWithoutParentCommentInput = {
    where: ArticleCommentWhereUniqueInput
    data: XOR<ArticleCommentUpdateWithoutParentCommentInput, ArticleCommentUncheckedUpdateWithoutParentCommentInput>
  }

  export type ArticleCommentUpdateManyWithWhereWithoutParentCommentInput = {
    where: ArticleCommentScalarWhereInput
    data: XOR<ArticleCommentUpdateManyMutationInput, ArticleCommentUncheckedUpdateManyWithoutParentCommentInput>
  }

  export type ArticleCommentLikeUpsertWithWhereUniqueWithoutArticleCommentInput = {
    where: ArticleCommentLikeWhereUniqueInput
    update: XOR<ArticleCommentLikeUpdateWithoutArticleCommentInput, ArticleCommentLikeUncheckedUpdateWithoutArticleCommentInput>
    create: XOR<ArticleCommentLikeCreateWithoutArticleCommentInput, ArticleCommentLikeUncheckedCreateWithoutArticleCommentInput>
  }

  export type ArticleCommentLikeUpdateWithWhereUniqueWithoutArticleCommentInput = {
    where: ArticleCommentLikeWhereUniqueInput
    data: XOR<ArticleCommentLikeUpdateWithoutArticleCommentInput, ArticleCommentLikeUncheckedUpdateWithoutArticleCommentInput>
  }

  export type ArticleCommentLikeUpdateManyWithWhereWithoutArticleCommentInput = {
    where: ArticleCommentLikeScalarWhereInput
    data: XOR<ArticleCommentLikeUpdateManyMutationInput, ArticleCommentLikeUncheckedUpdateManyWithoutArticleCommentInput>
  }

  export type ArticleCommentLikeScalarWhereInput = {
    AND?: ArticleCommentLikeScalarWhereInput | ArticleCommentLikeScalarWhereInput[]
    OR?: ArticleCommentLikeScalarWhereInput[]
    NOT?: ArticleCommentLikeScalarWhereInput | ArticleCommentLikeScalarWhereInput[]
    commentId?: BigIntFilter<"ArticleCommentLike"> | bigint | number
    userId?: BigIntFilter<"ArticleCommentLike"> | bigint | number
    createdAt?: DateTimeFilter<"ArticleCommentLike"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleCommentLike"> | Date | string
  }

  export type ArticleCommentCreateWithoutArticleCommentLikeInput = {
    id?: bigint | number
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleCommentInput
    article: ArticleCreateNestedOneWithoutArticleCommentInput
    parentComment?: ArticleCommentCreateNestedOneWithoutRepliesInput
    replies?: ArticleCommentCreateNestedManyWithoutParentCommentInput
  }

  export type ArticleCommentUncheckedCreateWithoutArticleCommentLikeInput = {
    id?: bigint | number
    articleId: bigint | number
    parentCommentId?: bigint | number | null
    content: string
    authorId: bigint | number
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ArticleCommentUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type ArticleCommentCreateOrConnectWithoutArticleCommentLikeInput = {
    where: ArticleCommentWhereUniqueInput
    create: XOR<ArticleCommentCreateWithoutArticleCommentLikeInput, ArticleCommentUncheckedCreateWithoutArticleCommentLikeInput>
  }

  export type UserCreateWithoutArticleCommentLikeInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeCreateNestedManyWithoutUserInput
    event?: EventCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapCreateNestedManyWithoutUserInput
    userTerm?: UserTermCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticleCommentLikeInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleUncheckedCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentUncheckedCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    event?: EventUncheckedCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutUserInput
    userTerm?: UserTermUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticleCommentLikeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticleCommentLikeInput, UserUncheckedCreateWithoutArticleCommentLikeInput>
  }

  export type ArticleCommentUpsertWithoutArticleCommentLikeInput = {
    update: XOR<ArticleCommentUpdateWithoutArticleCommentLikeInput, ArticleCommentUncheckedUpdateWithoutArticleCommentLikeInput>
    create: XOR<ArticleCommentCreateWithoutArticleCommentLikeInput, ArticleCommentUncheckedCreateWithoutArticleCommentLikeInput>
    where?: ArticleCommentWhereInput
  }

  export type ArticleCommentUpdateToOneWithWhereWithoutArticleCommentLikeInput = {
    where?: ArticleCommentWhereInput
    data: XOR<ArticleCommentUpdateWithoutArticleCommentLikeInput, ArticleCommentUncheckedUpdateWithoutArticleCommentLikeInput>
  }

  export type ArticleCommentUpdateWithoutArticleCommentLikeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleCommentNestedInput
    article?: ArticleUpdateOneRequiredWithoutArticleCommentNestedInput
    parentComment?: ArticleCommentUpdateOneWithoutRepliesNestedInput
    replies?: ArticleCommentUpdateManyWithoutParentCommentNestedInput
  }

  export type ArticleCommentUncheckedUpdateWithoutArticleCommentLikeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    parentCommentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArticleCommentUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type UserUpsertWithoutArticleCommentLikeInput = {
    update: XOR<UserUpdateWithoutArticleCommentLikeInput, UserUncheckedUpdateWithoutArticleCommentLikeInput>
    create: XOR<UserCreateWithoutArticleCommentLikeInput, UserUncheckedCreateWithoutArticleCommentLikeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticleCommentLikeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticleCommentLikeInput, UserUncheckedUpdateWithoutArticleCommentLikeInput>
  }

  export type UserUpdateWithoutArticleCommentLikeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutUserNestedInput
    event?: EventUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticleCommentLikeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUncheckedUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    event?: EventUncheckedUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUncheckedUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleCreateWithoutArticleImageInput = {
    id?: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleInput
    community: CommunityCreateNestedOneWithoutArticleInput
    articleLike?: ArticleLikeCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutArticleImageInput = {
    id?: bigint | number
    communityId: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    authorId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutArticleImageInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutArticleImageInput, ArticleUncheckedCreateWithoutArticleImageInput>
  }

  export type ArticleUpsertWithoutArticleImageInput = {
    update: XOR<ArticleUpdateWithoutArticleImageInput, ArticleUncheckedUpdateWithoutArticleImageInput>
    create: XOR<ArticleCreateWithoutArticleImageInput, ArticleUncheckedCreateWithoutArticleImageInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutArticleImageInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutArticleImageInput, ArticleUncheckedUpdateWithoutArticleImageInput>
  }

  export type ArticleUpdateWithoutArticleImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleNestedInput
    community?: CommunityUpdateOneRequiredWithoutArticleNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutArticleImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communityId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateWithoutArticleLikeInput = {
    id?: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleInput
    community: CommunityCreateNestedOneWithoutArticleInput
    articleImage?: ArticleImageCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutArticleLikeInput = {
    id?: bigint | number
    communityId: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    authorId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    articleImage?: ArticleImageUncheckedCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutArticleLikeInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutArticleLikeInput, ArticleUncheckedCreateWithoutArticleLikeInput>
  }

  export type UserCreateWithoutArticleLikeInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutUserInput
    event?: EventCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapCreateNestedManyWithoutUserInput
    userTerm?: UserTermCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticleLikeInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleUncheckedCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentUncheckedCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutUserInput
    event?: EventUncheckedCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutUserInput
    userTerm?: UserTermUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticleLikeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticleLikeInput, UserUncheckedCreateWithoutArticleLikeInput>
  }

  export type ArticleUpsertWithoutArticleLikeInput = {
    update: XOR<ArticleUpdateWithoutArticleLikeInput, ArticleUncheckedUpdateWithoutArticleLikeInput>
    create: XOR<ArticleCreateWithoutArticleLikeInput, ArticleUncheckedCreateWithoutArticleLikeInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutArticleLikeInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutArticleLikeInput, ArticleUncheckedUpdateWithoutArticleLikeInput>
  }

  export type ArticleUpdateWithoutArticleLikeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleNestedInput
    community?: CommunityUpdateOneRequiredWithoutArticleNestedInput
    articleImage?: ArticleImageUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutArticleLikeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communityId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleImage?: ArticleImageUncheckedUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserUpsertWithoutArticleLikeInput = {
    update: XOR<UserUpdateWithoutArticleLikeInput, UserUncheckedUpdateWithoutArticleLikeInput>
    create: XOR<UserCreateWithoutArticleLikeInput, UserUncheckedCreateWithoutArticleLikeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticleLikeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticleLikeInput, UserUncheckedUpdateWithoutArticleLikeInput>
  }

  export type UserUpdateWithoutArticleLikeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutUserNestedInput
    event?: EventUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticleLikeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUncheckedUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutUserNestedInput
    event?: EventUncheckedUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUncheckedUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleCreateWithoutCommunityInput = {
    id?: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticleInput
    articleImage?: ArticleImageCreateNestedManyWithoutArticleInput
    articleLike?: ArticleLikeCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutCommunityInput = {
    id?: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    authorId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    articleImage?: ArticleImageUncheckedCreateNestedManyWithoutArticleInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutCommunityInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCommunityInput, ArticleUncheckedCreateWithoutCommunityInput>
  }

  export type ArticleCreateManyCommunityInputEnvelope = {
    data: ArticleCreateManyCommunityInput | ArticleCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutCommunityInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutCommunityInput, ArticleUncheckedUpdateWithoutCommunityInput>
    create: XOR<ArticleCreateWithoutCommunityInput, ArticleUncheckedCreateWithoutCommunityInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutCommunityInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutCommunityInput, ArticleUncheckedUpdateWithoutCommunityInput>
  }

  export type ArticleUpdateManyWithWhereWithoutCommunityInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutCommunityInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: BigIntFilter<"Article"> | bigint | number
    communityId?: BigIntFilter<"Article"> | bigint | number
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    isAnonymous?: BoolFilter<"Article"> | boolean
    authorId?: BigIntFilter<"Article"> | bigint | number
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type UserCreateWithoutEventInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapCreateNestedManyWithoutUserInput
    userTerm?: UserTermCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleUncheckedCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentUncheckedCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutUserInput
    userTerm?: UserTermUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
  }

  export type EventImageCreateWithoutEventInput = {
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageUncheckedCreateWithoutEventInput = {
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageCreateOrConnectWithoutEventInput = {
    where: EventImageWhereUniqueInput
    create: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput>
  }

  export type EventImageCreateManyEventInputEnvelope = {
    data: EventImageCreateManyEventInput | EventImageCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventScrapCreateWithoutEventInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventScrapInput
  }

  export type EventScrapUncheckedCreateWithoutEventInput = {
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventScrapCreateOrConnectWithoutEventInput = {
    where: EventScrapWhereUniqueInput
    create: XOR<EventScrapCreateWithoutEventInput, EventScrapUncheckedCreateWithoutEventInput>
  }

  export type EventScrapCreateManyEventInputEnvelope = {
    data: EventScrapCreateManyEventInput | EventScrapCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventInput = {
    update: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
  }

  export type UserUpdateWithoutEventInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUncheckedUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUncheckedUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventImageUpsertWithWhereUniqueWithoutEventInput = {
    where: EventImageWhereUniqueInput
    update: XOR<EventImageUpdateWithoutEventInput, EventImageUncheckedUpdateWithoutEventInput>
    create: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput>
  }

  export type EventImageUpdateWithWhereUniqueWithoutEventInput = {
    where: EventImageWhereUniqueInput
    data: XOR<EventImageUpdateWithoutEventInput, EventImageUncheckedUpdateWithoutEventInput>
  }

  export type EventImageUpdateManyWithWhereWithoutEventInput = {
    where: EventImageScalarWhereInput
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyWithoutEventInput>
  }

  export type EventImageScalarWhereInput = {
    AND?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
    OR?: EventImageScalarWhereInput[]
    NOT?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
    eventId?: BigIntFilter<"EventImage"> | bigint | number
    imageUrl?: StringFilter<"EventImage"> | string
    order?: IntFilter<"EventImage"> | number
    createdAt?: DateTimeFilter<"EventImage"> | Date | string
    updatedAt?: DateTimeFilter<"EventImage"> | Date | string
  }

  export type EventScrapUpsertWithWhereUniqueWithoutEventInput = {
    where: EventScrapWhereUniqueInput
    update: XOR<EventScrapUpdateWithoutEventInput, EventScrapUncheckedUpdateWithoutEventInput>
    create: XOR<EventScrapCreateWithoutEventInput, EventScrapUncheckedCreateWithoutEventInput>
  }

  export type EventScrapUpdateWithWhereUniqueWithoutEventInput = {
    where: EventScrapWhereUniqueInput
    data: XOR<EventScrapUpdateWithoutEventInput, EventScrapUncheckedUpdateWithoutEventInput>
  }

  export type EventScrapUpdateManyWithWhereWithoutEventInput = {
    where: EventScrapScalarWhereInput
    data: XOR<EventScrapUpdateManyMutationInput, EventScrapUncheckedUpdateManyWithoutEventInput>
  }

  export type EventScrapScalarWhereInput = {
    AND?: EventScrapScalarWhereInput | EventScrapScalarWhereInput[]
    OR?: EventScrapScalarWhereInput[]
    NOT?: EventScrapScalarWhereInput | EventScrapScalarWhereInput[]
    userId?: BigIntFilter<"EventScrap"> | bigint | number
    eventId?: BigIntFilter<"EventScrap"> | bigint | number
    createdAt?: DateTimeFilter<"EventScrap"> | Date | string
    updatedAt?: DateTimeFilter<"EventScrap"> | Date | string
  }

  export type EventCreateWithoutEventImageInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventInput
    eventScrap?: EventScrapCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventImageInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    authorId: bigint | number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventImageInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventImageInput, EventUncheckedCreateWithoutEventImageInput>
  }

  export type EventUpsertWithoutEventImageInput = {
    update: XOR<EventUpdateWithoutEventImageInput, EventUncheckedUpdateWithoutEventImageInput>
    create: XOR<EventCreateWithoutEventImageInput, EventUncheckedCreateWithoutEventImageInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventImageInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventImageInput, EventUncheckedUpdateWithoutEventImageInput>
  }

  export type EventUpdateWithoutEventImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventNestedInput
    eventScrap?: EventScrapUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventScrap?: EventScrapUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutEventScrapInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeCreateNestedManyWithoutUserInput
    event?: EventCreateNestedManyWithoutUserInput
    userTerm?: UserTermCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventScrapInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleUncheckedCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentUncheckedCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    event?: EventUncheckedCreateNestedManyWithoutUserInput
    userTerm?: UserTermUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventScrapInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventScrapInput, UserUncheckedCreateWithoutEventScrapInput>
  }

  export type EventCreateWithoutEventScrapInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventInput
    eventImage?: EventImageCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventScrapInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    authorId: bigint | number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventScrapInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventScrapInput, EventUncheckedCreateWithoutEventScrapInput>
  }

  export type UserUpsertWithoutEventScrapInput = {
    update: XOR<UserUpdateWithoutEventScrapInput, UserUncheckedUpdateWithoutEventScrapInput>
    create: XOR<UserCreateWithoutEventScrapInput, UserUncheckedCreateWithoutEventScrapInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventScrapInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventScrapInput, UserUncheckedUpdateWithoutEventScrapInput>
  }

  export type UserUpdateWithoutEventScrapInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutUserNestedInput
    event?: EventUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventScrapInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUncheckedUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    event?: EventUncheckedUpdateManyWithoutUserNestedInput
    userTerm?: UserTermUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutEventScrapInput = {
    update: XOR<EventUpdateWithoutEventScrapInput, EventUncheckedUpdateWithoutEventScrapInput>
    create: XOR<EventCreateWithoutEventScrapInput, EventUncheckedCreateWithoutEventScrapInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventScrapInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventScrapInput, EventUncheckedUpdateWithoutEventScrapInput>
  }

  export type EventUpdateWithoutEventScrapInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventNestedInput
    eventImage?: EventImageUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventScrapInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserTermCreateWithoutTermInput = {
    isAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserTermInput
  }

  export type UserTermUncheckedCreateWithoutTermInput = {
    userId: bigint | number
    isAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTermCreateOrConnectWithoutTermInput = {
    where: UserTermWhereUniqueInput
    create: XOR<UserTermCreateWithoutTermInput, UserTermUncheckedCreateWithoutTermInput>
  }

  export type UserTermCreateManyTermInputEnvelope = {
    data: UserTermCreateManyTermInput | UserTermCreateManyTermInput[]
    skipDuplicates?: boolean
  }

  export type UserTermUpsertWithWhereUniqueWithoutTermInput = {
    where: UserTermWhereUniqueInput
    update: XOR<UserTermUpdateWithoutTermInput, UserTermUncheckedUpdateWithoutTermInput>
    create: XOR<UserTermCreateWithoutTermInput, UserTermUncheckedCreateWithoutTermInput>
  }

  export type UserTermUpdateWithWhereUniqueWithoutTermInput = {
    where: UserTermWhereUniqueInput
    data: XOR<UserTermUpdateWithoutTermInput, UserTermUncheckedUpdateWithoutTermInput>
  }

  export type UserTermUpdateManyWithWhereWithoutTermInput = {
    where: UserTermScalarWhereInput
    data: XOR<UserTermUpdateManyMutationInput, UserTermUncheckedUpdateManyWithoutTermInput>
  }

  export type UserTermScalarWhereInput = {
    AND?: UserTermScalarWhereInput | UserTermScalarWhereInput[]
    OR?: UserTermScalarWhereInput[]
    NOT?: UserTermScalarWhereInput | UserTermScalarWhereInput[]
    userId?: BigIntFilter<"UserTerm"> | bigint | number
    termId?: BigIntFilter<"UserTerm"> | bigint | number
    isAccepted?: BoolFilter<"UserTerm"> | boolean
    createdAt?: DateTimeFilter<"UserTerm"> | Date | string
    updatedAt?: DateTimeFilter<"UserTerm"> | Date | string
  }

  export type ArticleCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutArticleInput
    articleImage?: ArticleImageCreateNestedManyWithoutArticleInput
    articleLike?: ArticleLikeCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    communityId: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    articleImage?: ArticleImageUncheckedCreateNestedManyWithoutArticleInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutArticleInput
    ArticleComment?: ArticleCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutUserInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleCreateManyUserInputEnvelope = {
    data: ArticleCreateManyUserInput | ArticleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleCommentCreateWithoutUserInput = {
    id?: bigint | number
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutArticleCommentInput
    parentComment?: ArticleCommentCreateNestedOneWithoutRepliesInput
    replies?: ArticleCommentCreateNestedManyWithoutParentCommentInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    articleId: bigint | number
    parentCommentId?: bigint | number | null
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ArticleCommentUncheckedCreateNestedManyWithoutParentCommentInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutArticleCommentInput
  }

  export type ArticleCommentCreateOrConnectWithoutUserInput = {
    where: ArticleCommentWhereUniqueInput
    create: XOR<ArticleCommentCreateWithoutUserInput, ArticleCommentUncheckedCreateWithoutUserInput>
  }

  export type ArticleCommentCreateManyUserInputEnvelope = {
    data: ArticleCommentCreateManyUserInput | ArticleCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleCommentLikeCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    articleComment: ArticleCommentCreateNestedOneWithoutArticleCommentLikeInput
  }

  export type ArticleCommentLikeUncheckedCreateWithoutUserInput = {
    commentId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentLikeCreateOrConnectWithoutUserInput = {
    where: ArticleCommentLikeWhereUniqueInput
    create: XOR<ArticleCommentLikeCreateWithoutUserInput, ArticleCommentLikeUncheckedCreateWithoutUserInput>
  }

  export type ArticleCommentLikeCreateManyUserInputEnvelope = {
    data: ArticleCommentLikeCreateManyUserInput | ArticleCommentLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleLikeCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutArticleLikeInput
  }

  export type ArticleLikeUncheckedCreateWithoutUserInput = {
    articleId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleLikeCreateOrConnectWithoutUserInput = {
    where: ArticleLikeWhereUniqueInput
    create: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput>
  }

  export type ArticleLikeCreateManyUserInputEnvelope = {
    data: ArticleLikeCreateManyUserInput | ArticleLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventImage?: EventImageCreateNestedManyWithoutEventInput
    eventScrap?: EventScrapCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: EventCreateManyUserInput | EventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventScrapCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutEventScrapInput
  }

  export type EventScrapUncheckedCreateWithoutUserInput = {
    eventId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventScrapCreateOrConnectWithoutUserInput = {
    where: EventScrapWhereUniqueInput
    create: XOR<EventScrapCreateWithoutUserInput, EventScrapUncheckedCreateWithoutUserInput>
  }

  export type EventScrapCreateManyUserInputEnvelope = {
    data: EventScrapCreateManyUserInput | EventScrapCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTermCreateWithoutUserInput = {
    isAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    term: TermCreateNestedOneWithoutUserTermInput
  }

  export type UserTermUncheckedCreateWithoutUserInput = {
    termId: bigint | number
    isAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTermCreateOrConnectWithoutUserInput = {
    where: UserTermWhereUniqueInput
    create: XOR<UserTermCreateWithoutUserInput, UserTermUncheckedCreateWithoutUserInput>
  }

  export type UserTermCreateManyUserInputEnvelope = {
    data: UserTermCreateManyUserInput | UserTermCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
  }

  export type ArticleUpdateManyWithWhereWithoutUserInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleCommentWhereUniqueInput
    update: XOR<ArticleCommentUpdateWithoutUserInput, ArticleCommentUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleCommentCreateWithoutUserInput, ArticleCommentUncheckedCreateWithoutUserInput>
  }

  export type ArticleCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleCommentWhereUniqueInput
    data: XOR<ArticleCommentUpdateWithoutUserInput, ArticleCommentUncheckedUpdateWithoutUserInput>
  }

  export type ArticleCommentUpdateManyWithWhereWithoutUserInput = {
    where: ArticleCommentScalarWhereInput
    data: XOR<ArticleCommentUpdateManyMutationInput, ArticleCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleCommentLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleCommentLikeWhereUniqueInput
    update: XOR<ArticleCommentLikeUpdateWithoutUserInput, ArticleCommentLikeUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleCommentLikeCreateWithoutUserInput, ArticleCommentLikeUncheckedCreateWithoutUserInput>
  }

  export type ArticleCommentLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleCommentLikeWhereUniqueInput
    data: XOR<ArticleCommentLikeUpdateWithoutUserInput, ArticleCommentLikeUncheckedUpdateWithoutUserInput>
  }

  export type ArticleCommentLikeUpdateManyWithWhereWithoutUserInput = {
    where: ArticleCommentLikeScalarWhereInput
    data: XOR<ArticleCommentLikeUpdateManyMutationInput, ArticleCommentLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleLikeWhereUniqueInput
    update: XOR<ArticleLikeUpdateWithoutUserInput, ArticleLikeUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput>
  }

  export type ArticleLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleLikeWhereUniqueInput
    data: XOR<ArticleLikeUpdateWithoutUserInput, ArticleLikeUncheckedUpdateWithoutUserInput>
  }

  export type ArticleLikeUpdateManyWithWhereWithoutUserInput = {
    where: ArticleLikeScalarWhereInput
    data: XOR<ArticleLikeUpdateManyMutationInput, ArticleLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: BigIntFilter<"Event"> | bigint | number
    title?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    venueName?: StringNullableFilter<"Event"> | string | null
    venueRoadAddress?: StringNullableFilter<"Event"> | string | null
    venueJibunAddress?: StringNullableFilter<"Event"> | string | null
    venueDetailAddress?: StringNullableFilter<"Event"> | string | null
    price?: IntFilter<"Event"> | number
    link?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    authorId?: BigIntFilter<"Event"> | bigint | number
    category?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventScrapUpsertWithWhereUniqueWithoutUserInput = {
    where: EventScrapWhereUniqueInput
    update: XOR<EventScrapUpdateWithoutUserInput, EventScrapUncheckedUpdateWithoutUserInput>
    create: XOR<EventScrapCreateWithoutUserInput, EventScrapUncheckedCreateWithoutUserInput>
  }

  export type EventScrapUpdateWithWhereUniqueWithoutUserInput = {
    where: EventScrapWhereUniqueInput
    data: XOR<EventScrapUpdateWithoutUserInput, EventScrapUncheckedUpdateWithoutUserInput>
  }

  export type EventScrapUpdateManyWithWhereWithoutUserInput = {
    where: EventScrapScalarWhereInput
    data: XOR<EventScrapUpdateManyMutationInput, EventScrapUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTermUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTermWhereUniqueInput
    update: XOR<UserTermUpdateWithoutUserInput, UserTermUncheckedUpdateWithoutUserInput>
    create: XOR<UserTermCreateWithoutUserInput, UserTermUncheckedCreateWithoutUserInput>
  }

  export type UserTermUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTermWhereUniqueInput
    data: XOR<UserTermUpdateWithoutUserInput, UserTermUncheckedUpdateWithoutUserInput>
  }

  export type UserTermUpdateManyWithWhereWithoutUserInput = {
    where: UserTermScalarWhereInput
    data: XOR<UserTermUpdateManyMutationInput, UserTermUncheckedUpdateManyWithoutUserInput>
  }

  export type TermCreateWithoutUserTermInput = {
    id?: bigint | number
    title: string
    content: string
    isRequired: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermUncheckedCreateWithoutUserTermInput = {
    id?: bigint | number
    title: string
    content: string
    isRequired: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermCreateOrConnectWithoutUserTermInput = {
    where: TermWhereUniqueInput
    create: XOR<TermCreateWithoutUserTermInput, TermUncheckedCreateWithoutUserTermInput>
  }

  export type UserCreateWithoutUserTermInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeCreateNestedManyWithoutUserInput
    event?: EventCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTermInput = {
    id?: bigint | number
    name?: string | null
    nickname: string
    birthdate?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    profileImage?: string | null
    role?: string
    oauthProvider?: string | null
    oauthId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleUncheckedCreateNestedManyWithoutUserInput
    articleComment?: ArticleCommentUncheckedCreateNestedManyWithoutUserInput
    articleCommentLike?: ArticleCommentLikeUncheckedCreateNestedManyWithoutUserInput
    articleLike?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    event?: EventUncheckedCreateNestedManyWithoutUserInput
    eventScrap?: EventScrapUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTermInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTermInput, UserUncheckedCreateWithoutUserTermInput>
  }

  export type TermUpsertWithoutUserTermInput = {
    update: XOR<TermUpdateWithoutUserTermInput, TermUncheckedUpdateWithoutUserTermInput>
    create: XOR<TermCreateWithoutUserTermInput, TermUncheckedCreateWithoutUserTermInput>
    where?: TermWhereInput
  }

  export type TermUpdateToOneWithWhereWithoutUserTermInput = {
    where?: TermWhereInput
    data: XOR<TermUpdateWithoutUserTermInput, TermUncheckedUpdateWithoutUserTermInput>
  }

  export type TermUpdateWithoutUserTermInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermUncheckedUpdateWithoutUserTermInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutUserTermInput = {
    update: XOR<UserUpdateWithoutUserTermInput, UserUncheckedUpdateWithoutUserTermInput>
    create: XOR<UserCreateWithoutUserTermInput, UserUncheckedCreateWithoutUserTermInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTermInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTermInput, UserUncheckedUpdateWithoutUserTermInput>
  }

  export type UserUpdateWithoutUserTermInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutUserNestedInput
    event?: EventUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTermInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    articleComment?: ArticleCommentUncheckedUpdateManyWithoutUserNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutUserNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    event?: EventUncheckedUpdateManyWithoutUserNestedInput
    eventScrap?: EventScrapUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleImageCreateManyArticleInput = {
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleLikeCreateManyArticleInput = {
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentCreateManyArticleInput = {
    id?: bigint | number
    parentCommentId?: bigint | number | null
    content: string
    authorId: bigint | number
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleImageUpdateWithoutArticleInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleImageUncheckedUpdateWithoutArticleInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleImageUncheckedUpdateManyWithoutArticleInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUpdateWithoutArticleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleLikeNestedInput
  }

  export type ArticleLikeUncheckedUpdateWithoutArticleInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUncheckedUpdateManyWithoutArticleInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentUpdateWithoutArticleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleCommentNestedInput
    parentComment?: ArticleCommentUpdateOneWithoutRepliesNestedInput
    replies?: ArticleCommentUpdateManyWithoutParentCommentNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentUncheckedUpdateWithoutArticleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parentCommentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArticleCommentUncheckedUpdateManyWithoutParentCommentNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentUncheckedUpdateManyWithoutArticleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parentCommentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentCreateManyParentCommentInput = {
    id?: bigint | number
    articleId: bigint | number
    content: string
    authorId: bigint | number
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentLikeCreateManyArticleCommentInput = {
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentUpdateWithoutParentCommentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleCommentNestedInput
    article?: ArticleUpdateOneRequiredWithoutArticleCommentNestedInput
    replies?: ArticleCommentUpdateManyWithoutParentCommentNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentUncheckedUpdateWithoutParentCommentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArticleCommentUncheckedUpdateManyWithoutParentCommentNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentUncheckedUpdateManyWithoutParentCommentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentLikeUpdateWithoutArticleCommentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleCommentLikeNestedInput
  }

  export type ArticleCommentLikeUncheckedUpdateWithoutArticleCommentInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentLikeUncheckedUpdateManyWithoutArticleCommentInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyCommunityInput = {
    id?: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    authorId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutCommunityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleNestedInput
    articleImage?: ArticleImageUpdateManyWithoutArticleNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutCommunityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleImage?: ArticleImageUncheckedUpdateManyWithoutArticleNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutCommunityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageCreateManyEventInput = {
    imageUrl: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventScrapCreateManyEventInput = {
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageUpdateWithoutEventInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateWithoutEventInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateManyWithoutEventInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScrapUpdateWithoutEventInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventScrapNestedInput
  }

  export type EventScrapUncheckedUpdateWithoutEventInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScrapUncheckedUpdateManyWithoutEventInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTermCreateManyTermInput = {
    userId: bigint | number
    isAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTermUpdateWithoutTermInput = {
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTermNestedInput
  }

  export type UserTermUncheckedUpdateWithoutTermInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTermUncheckedUpdateManyWithoutTermInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyUserInput = {
    id?: bigint | number
    communityId: bigint | number
    title: string
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentCreateManyUserInput = {
    id?: bigint | number
    articleId: bigint | number
    parentCommentId?: bigint | number | null
    content: string
    isAnonymous: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCommentLikeCreateManyUserInput = {
    commentId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleLikeCreateManyUserInput = {
    articleId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyUserInput = {
    id?: bigint | number
    title: string
    startDate: Date | string
    endDate: Date | string
    venueName?: string | null
    venueRoadAddress?: string | null
    venueJibunAddress?: string | null
    venueDetailAddress?: string | null
    price: number
    link?: string | null
    description?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventScrapCreateManyUserInput = {
    eventId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTermCreateManyUserInput = {
    termId: bigint | number
    isAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutArticleNestedInput
    articleImage?: ArticleImageUpdateManyWithoutArticleNestedInput
    articleLike?: ArticleLikeUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communityId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleImage?: ArticleImageUncheckedUpdateManyWithoutArticleNestedInput
    articleLike?: ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput
    ArticleComment?: ArticleCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communityId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutArticleCommentNestedInput
    parentComment?: ArticleCommentUpdateOneWithoutRepliesNestedInput
    replies?: ArticleCommentUpdateManyWithoutParentCommentNestedInput
    articleCommentLike?: ArticleCommentLikeUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    parentCommentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ArticleCommentUncheckedUpdateManyWithoutParentCommentNestedInput
    articleCommentLike?: ArticleCommentLikeUncheckedUpdateManyWithoutArticleCommentNestedInput
  }

  export type ArticleCommentUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    parentCommentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentLikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articleComment?: ArticleCommentUpdateOneRequiredWithoutArticleCommentLikeNestedInput
  }

  export type ArticleCommentLikeUncheckedUpdateWithoutUserInput = {
    commentId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCommentLikeUncheckedUpdateManyWithoutUserInput = {
    commentId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutArticleLikeNestedInput
  }

  export type ArticleLikeUncheckedUpdateWithoutUserInput = {
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUncheckedUpdateManyWithoutUserInput = {
    articleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventImage?: EventImageUpdateManyWithoutEventNestedInput
    eventScrap?: EventScrapUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    eventScrap?: EventScrapUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueRoadAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueJibunAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScrapUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventScrapNestedInput
  }

  export type EventScrapUncheckedUpdateWithoutUserInput = {
    eventId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScrapUncheckedUpdateManyWithoutUserInput = {
    eventId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTermUpdateWithoutUserInput = {
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    term?: TermUpdateOneRequiredWithoutUserTermNestedInput
  }

  export type UserTermUncheckedUpdateWithoutUserInput = {
    termId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTermUncheckedUpdateManyWithoutUserInput = {
    termId?: BigIntFieldUpdateOperationsInput | bigint | number
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}