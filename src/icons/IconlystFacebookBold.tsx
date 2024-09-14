import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.957 7.733a.43.43 0 0 1 .293-.124h2.7a.5.5 0 0 0 .5-.5v-3.6a.5.5 0 0 0-.5-.5h-2.7c-1.306 0-2.594.53-3.536 1.457A5 5 0 0 0 9.25 8.009v2.2h-2.2c-.277 0-.5.224-.5.5v3.6c0 .277.223.5.5.5h2.2v6.7a.5.5 0 0 0 .5.5h3.6a.5.5 0 0 0 .5-.5v-6.7h3.1c.277 0 .5-.223.5-.5v-3.6c0-.276-.223-.5-.5-.5h-3.1v-2.2c0-.108.042-.21.107-.276"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFacebookBold;
