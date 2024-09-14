import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldBulk = ({
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
      <Path d="M15.797 8.198c2.64.434 4.843 1.337 5.632 2.685a9.51 9.51 0 0 0-8.317-8.313c1.347.788 2.25 2.988 2.685 5.628M8.202 15.794c-2.642-.434-4.844-1.338-5.632-2.686a9.51 9.51 0 0 0 8.318 8.32c-1.348-.788-2.252-2.991-2.686-5.634M15.798 15.794c-.434 2.643-1.338 4.846-2.686 5.635a9.51 9.51 0 0 0 8.318-8.321c-.788 1.348-2.99 2.252-5.632 2.686M8.203 8.198c.434-2.64 1.338-4.84 2.685-5.628a9.51 9.51 0 0 0-8.317 8.313c.79-1.348 2.991-2.25 5.632-2.685" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.466 9.529A23 23 0 0 0 12 9.396c-.882 0-1.704.049-2.466.133a22.72 22.72 0 0 0-.001 4.934 22.8 22.8 0 0 0 4.934 0 23 23 0 0 0 .132-2.464c0-.883-.049-1.706-.133-2.47M12 16.096c-.751 0-1.502-.038-2.238-.105.519 2.676 1.496 4.258 2.238 4.258s1.719-1.582 2.238-4.258c-.736.067-1.487.105-2.238.105M12 7.896c.75 0 1.5.038 2.237.105-.52-2.673-1.495-4.252-2.237-4.252s-1.717 1.579-2.237 4.252A25 25 0 0 1 12 7.896M3.75 11.996c0 .742 1.581 1.718 4.255 2.237A25 25 0 0 1 7.9 12c0-.752.038-1.504.106-2.24-2.675.518-4.256 1.495-4.256 2.237M20.25 11.996c0-.742-1.581-1.719-4.256-2.238.068.737.106 1.49.106 2.241 0 .75-.038 1.5-.105 2.234 2.674-.519 4.255-1.495 4.255-2.237"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldBulk;
