export default function HippoLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-label="StoryHippo logo">
      <ellipse cx="20" cy="24" rx="15" ry="11" fill="#E91E8C" opacity=".9" />
      <ellipse cx="13" cy="14" rx="6" ry="5" fill="#E91E8C" opacity=".9" />
      <ellipse cx="27" cy="14" rx="6" ry="5" fill="#E91E8C" opacity=".9" />
      <circle cx="15" cy="21" r="2.5" fill="white" />
      <circle cx="25" cy="21" r="2.5" fill="white" />
    </svg>
  )
}
