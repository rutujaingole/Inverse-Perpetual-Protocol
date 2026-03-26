/**
 * Contract addresses and ABIs
 * Fill these in when Role A delivers deployed contracts
 */

// ===== CONTRACT ADDRESSES =====
// TODO: Update when Role A deploys to testnet
export const VAULT_ADDRESS = import.meta.env.VITE_VAULT_ADDRESS || ""
export const HBTC_ADDRESS = import.meta.env.VITE_HBTC_ADDRESS || ""

// Chain configuration
export const CHAIN_ID = import.meta.env.VITE_CHAIN_ID || "11155111" // Sepolia
export const RPC_URL = import.meta.env.VITE_RPC_URL || ""

// Chainlink BTC/USD Oracle on Sepolia
export const CHAINLINK_BTC_USD = "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43"

// ===== CONTRACT ABIs =====

/**
 * hBTC Token ABI (ERC20)
 * From Role A's GitHub: https://github.com/sanchoo1/crypto
 */
export const HBTC_ABI = [
  {
    "type": "constructor",
    "inputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mint",
    "inputs": [
      {"name": "to", "type": "address", "internalType": "address"},
      {"name": "amount", "type": "uint256", "internalType": "uint256"}
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "approve",
    "inputs": [
      {"name": "spender", "type": "address", "internalType": "address"},
      {"name": "amount", "type": "uint256", "internalType": "uint256"}
    ],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transfer",
    "inputs": [
      {"name": "to", "type": "address", "internalType": "address"},
      {"name": "amount", "type": "uint256", "internalType": "uint256"}
    ],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {"name": "from", "type": "address", "internalType": "address"},
      {"name": "to", "type": "address", "internalType": "address"},
      {"name": "amount", "type": "uint256", "internalType": "uint256"}
    ],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [{"name": "account", "type": "address", "internalType": "address"}],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "allowance",
    "inputs": [
      {"name": "owner", "type": "address", "internalType": "address"},
      {"name": "spender", "type": "address", "internalType": "address"}
    ],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "decimals",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint8", "internalType": "uint8"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [{"name": "", "type": "string", "internalType": "string"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [{"name": "", "type": "string", "internalType": "string"}],
    "stateMutability": "view"
  }
]

/**
 * Vault Contract ABI (InversePerpetualVault)
 * From Role A's GitHub: https://github.com/sanchoo1/crypto
 */
export const VAULT_ABI = [
  {
    "type": "constructor",
    "inputs": [
      {"name": "_priceFeed", "type": "address", "internalType": "address"}
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "btcUsdPriceFeed",
    "inputs": [],
    "outputs": [{"name": "", "type": "address", "internalType": "contract AggregatorV3Interface"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "closePosition",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositCollateral",
    "inputs": [{"name": "amount", "type": "uint256", "internalType": "uint256"}],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "globalFundingIndex",
    "inputs": [],
    "outputs": [{"name": "", "type": "int256", "internalType": "int256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "globalFundingRateBps",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "liquidate",
    "inputs": [{"name": "targetUser", "type": "address", "internalType": "address"}],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "liquidationRewardBps",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "maintenanceMarginBps",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "openPosition",
    "inputs": [
      {"name": "sizeUsd", "type": "uint256", "internalType": "uint256"},
      {"name": "isLong", "type": "bool", "internalType": "bool"}
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [{"name": "", "type": "address", "internalType": "address"}],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "positions",
    "inputs": [{"name": "", "type": "address", "internalType": "address"}],
    "outputs": [
      {"name": "sizeUsd", "type": "uint256", "internalType": "uint256"},
      {"name": "collateral", "type": "uint256", "internalType": "uint256"},
      {"name": "entryPrice", "type": "uint256", "internalType": "uint256"},
      {"name": "isLong", "type": "bool", "internalType": "bool"}
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setRiskParameters",
    "inputs": [
      {"name": "_maintenanceMarginBps", "type": "uint256", "internalType": "uint256"},
      {"name": "_liquidationRewardBps", "type": "uint256", "internalType": "uint256"}
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "CollateralDeposited",
    "inputs": [
      {"name": "user", "type": "address", "indexed": true, "internalType": "address"},
      {"name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256"}
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PositionClosed",
    "inputs": [
      {"name": "user", "type": "address", "indexed": true, "internalType": "address"},
      {"name": "pnl", "type": "uint256", "indexed": false, "internalType": "uint256"},
      {"name": "payout", "type": "uint256", "indexed": false, "internalType": "uint256"}
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PositionLiquidated",
    "inputs": [
      {"name": "user", "type": "address", "indexed": true, "internalType": "address"},
      {"name": "liquidator", "type": "address", "indexed": true, "internalType": "address"},
      {"name": "reward", "type": "uint256", "indexed": false, "internalType": "uint256"}
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PositionOpened",
    "inputs": [
      {"name": "user", "type": "address", "indexed": true, "internalType": "address"},
      {"name": "sizeUsd", "type": "uint256", "indexed": false, "internalType": "uint256"},
      {"name": "isLong", "type": "bool", "indexed": false, "internalType": "bool"},
      {"name": "entryPrice", "type": "uint256", "indexed": false, "internalType": "uint256"}
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RiskParametersUpdated",
    "inputs": [
      {"name": "maintenanceMarginBps", "type": "uint256", "indexed": false, "internalType": "uint256"},
      {"name": "liquidationRewardBps", "type": "uint256", "indexed": false, "internalType": "uint256"}
    ],
    "anonymous": false
  }
]

// ===== CONFIGURATION =====
export const MMR = 0.05 // 5% Maintenance Margin Ratio

// Network names
export const NETWORK_NAMES = {
  "1": "Ethereum Mainnet",
  "11155111": "Sepolia Testnet",
  "5": "Goerli Testnet (Deprecated)"
}

/**
 * Check if contracts are configured
 */
export function isContractConfigured() {
  return VAULT_ADDRESS && HBTC_ADDRESS
}

/**
 * Get network name from chain ID
 */
export function getNetworkName(chainId) {
  return NETWORK_NAMES[chainId] || `Unknown Network (${chainId})`
}

/**
 * Check if on correct network
 */
export function isCorrectNetwork(chainId) {
  return chainId === CHAIN_ID
}
