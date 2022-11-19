export default function ({ $axios, $config }) {
  const baseUrl = $config.vercel ? $config.vercelUrl : window.location.origin
  $axios.setBaseURL(baseUrl)
}
