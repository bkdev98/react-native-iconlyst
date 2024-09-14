import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessUpdateRefreshBold = ({
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
      d="m19.041 5.283.661-.683a.75.75 0 0 0-.43-1.264l-2.947-.434a.751.751 0 0 0-.848.875l.53 2.936a.75.75 0 0 0 1.276.389L18 6.36c2.473 2.592 3.05 6.637 1.15 9.847a8.2 8.2 0 0 1-6.492 4.012.75.75 0 0 0 .052 1.498q.027 0 .053-.002a9.7 9.7 0 0 0 7.678-4.746c2.256-3.812 1.56-8.622-1.399-11.687"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.463 10.926a.75.75 0 0 0 1.054.12c2.046-1.634 5.013-1.634 7.058-.002a.748.748 0 1 0 .935-1.172c-2.586-2.065-6.341-2.065-8.928 0a.75.75 0 0 0-.12 1.054"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.6 13.5a.749.749 0 1 0 .968-1.145c-1.445-1.22-3.612-1.215-5.043.014a.75.75 0 0 0 .978 1.138A2.41 2.41 0 0 1 13.6 13.5M12.945 15.378v-.04a.883.883 0 0 0-.9-.88c-.497 0-.9.423-.9.92a.9.9 0 0 0 1.8 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.56 16.705a.75.75 0 0 0-.757.196l-.716.74c-2.473-2.592-3.05-6.636-1.15-9.846a8.21 8.21 0 0 1 6.492-4.013.75.75 0 0 0 .695-.801.745.745 0 0 0-.8-.695 9.71 9.71 0 0 0-7.679 4.746c-2.256 3.812-1.558 8.623 1.4 11.687l-.66.684a.748.748 0 0 0 .43 1.264l2.946.433a.746.746 0 0 0 .648-.221.75.75 0 0 0 .2-.654L8.08 17.29a.75.75 0 0 0-.52-.585"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessUpdateRefreshBold;
