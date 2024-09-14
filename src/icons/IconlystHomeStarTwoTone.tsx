import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeStarTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.997 8.775v8.675a3.064 3.064 0 0 0 3.064 3.064h8.88a3.064 3.064 0 0 0 3.063-3.064V8.775"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 9.956 13.974 4a2.38 2.38 0 0 0-2.948 0L3.5 9.956"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.737 10.464 13.5 12a.27.27 0 0 0 .199.144l1.71.247c.07.01.133.046.175.101a.253.253 0 0 1-.029.34l-1.24 1.2a.25.25 0 0 0-.074.231l.298 1.692a.26.26 0 0 1-.216.294.3.3 0 0 1-.17-.026l-1.524-.799a.26.26 0 0 0-.245 0l-1.535.804a.27.27 0 0 1-.355-.11c-.026-.05-.036-.108-.026-.165l.296-1.692a.26.26 0 0 0-.074-.23l-1.247-1.199a.26.26 0 0 1 0-.367.3.3 0 0 1 .149-.074l1.711-.248a.27.27 0 0 0 .198-.144l.764-1.536a.27.27 0 0 1 .15-.133.27.27 0 0 1 .322.133"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHomeStarTwoTone;
