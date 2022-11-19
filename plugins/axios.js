export default function ({ $axios, $config }) {
  const baseUrl = $config.vercel ? $config.vercelUrl : window.location.host
  $axios.setBaseURL(`https://${window.location.host}`)
}
