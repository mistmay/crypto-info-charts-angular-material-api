export interface CryptoDetails {
    id: string;
    symbol: string;
    name: string;
    asset_platform_id?: null;
    platforms: Platforms;
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories?: (string)[] | null;
    public_notice?: null;
    additional_notices?: (null)[] | null;
    localization: LocalizationOrDescription;
    description: LocalizationOrDescription;
    links: Links;
    image: Image;
    country_origin: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    market_cap_rank: number;
    coingecko_rank: number;
    coingecko_score: number;
    developer_score: number;
    community_score: number;
    liquidity_score: number;
    public_interest_score: number;
    market_data: MarketData;
    community_data: CommunityData;
    developer_data: DeveloperData;
    public_interest_stats: PublicInterestStats;
    status_updates?: (null)[] | null;
    last_updated: string;
    tickers?: (TickersEntity)[] | null;
}
interface Platforms {
    '': string;
}
interface LocalizationOrDescription {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    pl: string;
    ro: string;
    hu: string;
    nl: string;
    pt: string;
    sv: string;
    vi: string;
    tr: string;
    ru: string;
    ja: string;
    zh: string;
    'zh-tw': string;
    ko: string;
    ar: string;
    th: string;
    id: string;
    cs: string;
    da: string;
    el: string;
    hi: string;
    no: string;
    sk: string;
    uk: string;
    he: string;
    fi: string;
    bg: string;
    hr: string;
    lt: string;
    sl: string;
}
interface Links {
    homepage?: (string)[] | null;
    blockchain_site?: (string)[] | null;
    official_forum_url?: (string)[] | null;
    chat_url?: (string)[] | null;
    announcement_url?: (string)[] | null;
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier?: null;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: ReposUrl;
}
interface ReposUrl {
    github?: (string)[] | null;
    bitbucket?: (null)[] | null;
}
interface Image {
    thumb: string;
    small: string;
    large: string;
}
interface MarketData {
    current_price: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    total_value_locked?: null;
    mcap_to_tvl_ratio?: null;
    fdv_to_tvl_ratio?: null;
    roi?: null;
    ath: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    ath_change_percentage: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    ath_date: AthDateOrAtlDate;
    atl: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    atl_change_percentage: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    atl_date: AthDateOrAtlDate;
    market_cap: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    market_cap_rank: number;
    fully_diluted_valuation: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    total_volume: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    high_24h: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    low_24h: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    price_change_percentage_1h_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    price_change_percentage_24h_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    price_change_percentage_7d_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    price_change_percentage_14d_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    price_change_percentage_30d_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    price_change_percentage_60d_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    price_change_percentage_200d_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    price_change_percentage_1y_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    market_cap_change_24h_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    market_cap_change_percentage_24h_in_currency: CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency;
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    last_updated: string;
}
interface CurrentPriceOrAthOrAthChangePercentageOrAtlOrAtlChangePercentageOrMarketCapOrFullyDilutedValuationOrTotalVolumeOrHigh24hOrLow24hOrPriceChange24hInCurrencyOrPriceChangePercentage1hInCurrencyOrPriceChangePercentage24hInCurrencyOrPriceChangePercentage7dInCurrencyOrPriceChangePercentage14dInCurrencyOrPriceChangePercentage30dInCurrencyOrPriceChangePercentage60dInCurrencyOrPriceChangePercentage200dInCurrencyOrPriceChangePercentage1yInCurrencyOrMarketCapChange24hInCurrencyOrMarketCapChangePercentage24hInCurrency {
    aed: number;
    ars: number;
    aud: number;
    bch: number;
    bdt: number;
    bhd: number;
    bmd: number;
    bnb: number;
    brl: number;
    btc: number;
    cad: number;
    chf: number;
    clp: number;
    cny: number;
    czk: number;
    dkk: number;
    dot: number;
    eos: number;
    eth: number;
    eur: number;
    gbp: number;
    hkd: number;
    huf: number;
    idr: number;
    ils: number;
    inr: number;
    jpy: number;
    krw: number;
    kwd: number;
    lkr: number;
    ltc: number;
    mmk: number;
    mxn: number;
    myr: number;
    ngn: number;
    nok: number;
    nzd: number;
    php: number;
    pkr: number;
    pln: number;
    rub: number;
    sar: number;
    sek: number;
    sgd: number;
    thb: number;
    try: number;
    twd: number;
    uah: number;
    usd: number;
    vef: number;
    vnd: number;
    xag: number;
    xau: number;
    xdr: number;
    xlm: number;
    xrp: number;
    yfi: number;
    zar: number;
    bits: number;
    link: number;
    sats: number;
}
interface AthDateOrAtlDate {
    aed: string;
    ars: string;
    aud: string;
    bch: string;
    bdt: string;
    bhd: string;
    bmd: string;
    bnb: string;
    brl: string;
    btc: string;
    cad: string;
    chf: string;
    clp: string;
    cny: string;
    czk: string;
    dkk: string;
    dot: string;
    eos: string;
    eth: string;
    eur: string;
    gbp: string;
    hkd: string;
    huf: string;
    idr: string;
    ils: string;
    inr: string;
    jpy: string;
    krw: string;
    kwd: string;
    lkr: string;
    ltc: string;
    mmk: string;
    mxn: string;
    myr: string;
    ngn: string;
    nok: string;
    nzd: string;
    php: string;
    pkr: string;
    pln: string;
    rub: string;
    sar: string;
    sek: string;
    sgd: string;
    thb: string;
    try: string;
    twd: string;
    uah: string;
    usd: string;
    vef: string;
    vnd: string;
    xag: string;
    xau: string;
    xdr: string;
    xlm: string;
    xrp: string;
    yfi: string;
    zar: string;
    bits: string;
    link: string;
    sats: string;
}
interface CommunityData {
    facebook_likes?: null;
    twitter_followers: number;
    reddit_average_posts_48h: number;
    reddit_average_comments_48h: number;
    reddit_subscribers: number;
    reddit_accounts_active_48h: number;
    telegram_channel_user_count?: null;
}
interface DeveloperData {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
    pull_requests_merged: number;
    pull_request_contributors: number;
    code_additions_deletions_4_weeks: CodeAdditionsDeletions4Weeks;
    commit_count_4_weeks: number;
    last_4_weeks_commit_activity_series?: (number)[] | null;
}
interface CodeAdditionsDeletions4Weeks {
    additions: number;
    deletions: number;
}
interface PublicInterestStats {
    alexa_rank: number;
    bing_matches?: null;
}
interface TickersEntity {
    base: string;
    target: string;
    market: Market;
    last: number;
    volume: number;
    converted_last: ConvertedLastOrConvertedVolume;
    converted_volume: ConvertedLastOrConvertedVolume;
    trust_score: string;
    bid_ask_spread_percentage: number;
    timestamp: string;
    last_traded_at: string;
    last_fetch_at: string;
    is_anomaly: boolean;
    is_stale: boolean;
    trade_url?: string | null;
    token_info_url?: null;
    coin_id: string;
    target_coin_id?: string | null;
}
interface Market {
    name: string;
    identifier: string;
    has_trading_incentive: boolean;
}
interface ConvertedLastOrConvertedVolume {
    btc: number;
    eth: number;
    usd: number;
}
