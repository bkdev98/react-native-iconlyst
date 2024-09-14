import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardRefreshBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.599 7.234-3.793-3.951a2.58 2.58 0 0 0-1.838-.783h-5.07a4.224 4.224 0 0 0-4.22 4.22v10.561A4.223 4.223 0 0 0 8.898 21.5h7.192a4.224 4.224 0 0 0 4.219-4.219V9c0-.663-.252-1.291-.71-1.766"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.5 14.25a.75.75 0 0 1-.75-.75c0-1.327-1.212-2.38-2.518-2.224l.108.055a.75.75 0 0 1-.68 1.337l-1.474-.75a.747.747 0 0 1-.153-1.233 3.77 3.77 0 0 1 2.474-.925 3.746 3.746 0 0 1 3.744 3.74.75.75 0 0 1-.75.75m-.52 2.065a3.76 3.76 0 0 1-2.472.925 3.747 3.747 0 0 1-3.745-3.74.75.75 0 0 1 1.5 0c0 1.328 1.218 2.383 2.52 2.224l-.108-.056a.75.75 0 1 1 .68-1.336l1.474.75a.749.749 0 0 1 .152 1.233"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSimcardRefreshBulk;
