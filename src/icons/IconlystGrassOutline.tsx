import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrassOutline = ({
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
    <Path
      fill={props.color}
      d="M12.608 4.147a.75.75 0 0 0-1.483.228c.212 1.38.17 2.784-.038 4.123a.75.75 0 1 0 1.482.23c.227-1.462.278-3.023.038-4.581"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3 18.989a.75.75 0 0 0 0 1.5h8.809a.7.7 0 0 0 .277 0H21a.75.75 0 0 0 0-1.5h-.706c-.002-1.04.224-2.29.495-3.398a28 28 0 0 1 .668-2.293l.012-.032.002-.008v-.001a.75.75 0 0 0-1.195-.82 34 34 0 0 0-2.004 1.843l-.03-.142a15 15 0 0 1-.233-2.283c-.061-1.806.11-4.082.71-6.46a.75.75 0 0 0-1.204-.762c-2.18 1.792-3.665 4.72-4.645 7.55a35 35 0 0 0-1.592 6.806H8.82c-.29-1.304-.794-2.575-1.443-3.775.234-1.211.454-3.482.161-6.004a21.5 21.5 0 0 1 2.43 4.447.75.75 0 0 0 1.39-.562c-1.527-3.78-3.657-6.25-4.6-7.057a.75.75 0 0 0-1.21.772c.654 2.321.702 4.697.574 6.405a20.6 20.6 0 0 0-2.416-2.79.75.75 0 0 0-1.239.755v.003l.004.01.013.045.05.174a44.489 44.489 0 0 1 .701 2.865c.319 1.525.594 3.285.575 4.712zm12.32 0h-2.53a33.7 33.7 0 0 1 1.498-6.315c.628-1.816 1.441-3.573 2.457-4.996a24.7 24.7 0 0 0-.236 4.227c.033.967.127 1.822.261 2.516.084.437.19.842.32 1.18-.833 1.05-1.418 2.127-1.77 3.388m-10.01 0h1.968c-.468-1.839-1.419-3.637-2.62-5.231l.046.212c.318 1.523.624 3.407.606 5.019m13.484 0H16.89c.434-1.277 1.19-2.373 2.408-3.612-.26 1.089-.504 2.418-.503 3.612"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrassOutline;