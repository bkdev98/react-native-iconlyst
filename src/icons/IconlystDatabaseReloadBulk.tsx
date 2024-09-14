import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseReloadBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M5.278 13.643c.78.35 1.59.56 2.42.72.81.16 1.63.25 2.45.3.617.029 1.233.04 1.85.014a.2.2 0 0 0 .157-.085 5.5 5.5 0 0 1 1.663-1.529 2.5 2.5 0 0 1 2.603-.002.23.23 0 0 0 .247-.01q.113-.08.24-.148c.12-.07.26-.13.39-.18s.27-.09.41-.11c.14-.03.29-.04.43-.04a2.3 2.3 0 0 1 .649.09.19.19 0 0 0 .205-.054l.082-.107a1.33 1.33 0 0 0 .264-.869c-.008-.89-.01-2.532-.01-3.254 0-.156-.17-.25-.305-.17q-.102.06-.205.114c-1.29.74-2.69 1.07-4.12 1.29-.66.1-1.33.16-2 .21-1.3.09-2.6.05-3.89-.1-.93-.11-1.86-.28-2.77-.53-.72-.21-1.43-.46-2.09-.84l-.25-.155a.196.196 0 0 0-.3.168c.003.72.005 2.36-.01 3.247 0 .44.14.79.42 1.08.42.45.93.72 1.47.95M11.222 16.722a.208.208 0 0 0-.2-.25l-.394-.008a18 18 0 0 1-2.12-.17c-.73-.11-1.47-.25-2.19-.42-.85-.2-1.67-.5-2.44-.96l-.168-.097c-.136-.08-.312.014-.311.173.002.723.004 2.33-.011 3.203-.01.52.19.91.54 1.23.4.38.87.63 1.36.83.87.37 1.78.6 2.7.76.88.15 1.76.23 2.64.26q.626.013 1.243.001c.162-.003.252-.19.162-.326a5.58 5.58 0 0 1-.925-3.085q.002-.586.114-1.141" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.91 6.212c.458.438 1.003.71 1.568.937 1.019.41 2.078.633 3.152.778.906.122 1.817.184 2.552.173 1.714.002 3.234-.143 4.731-.52.745-.188 1.474-.433 2.156-.82.375-.212.725-.46.996-.823.358-.48.364-1.039-.001-1.512a2.7 2.7 0 0 0-.424-.439c-.581-.475-1.25-.75-1.937-.979-1.224-.405-2.482-.605-3.754-.695-1.736-.124-3.465-.06-5.183.26-.933.172-1.848.415-2.719.826-.465.22-.908.48-1.264.882-.296.334-.47.715-.345 1.192.079.304.259.537.472.74M20.014 15.797a.74.74 0 0 0 .596-.72.75.75 0 0 0-.75-.75h-1.721c-.039 0-.072.018-.11.023-.051.008-.102.012-.151.03-.05.02-.091.049-.136.078-.036.023-.074.042-.106.07-.044.042-.076.09-.109.14-.018.028-.044.046-.058.075l-.006.02c-.023.05-.031.106-.043.162-.009.043-.025.084-.026.127 0 .009-.005.017-.005.026v1.73c0 .414.336.75.75.75a.745.745 0 0 0 .736-.68c.141.306.238.636.238.99a2.38 2.38 0 0 1-2.377 2.38 2.38 2.38 0 0 1-2.376-2.38c0-.833.429-1.592 1.147-2.03a.749.749 0 1 0-.779-1.28 3.85 3.85 0 0 0-1.868 3.31c0 2.14 1.739 3.88 3.876 3.88a3.882 3.882 0 0 0 3.278-5.951"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseReloadBulk;