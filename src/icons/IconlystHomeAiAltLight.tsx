import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeAiAltLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 9.954-7.526-5.957a2.38 2.38 0 0 0-2.948 0L3 9.954"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.496 8.775v8.675a3.064 3.064 0 0 0 3.064 3.064h8.88a3.064 3.064 0 0 0 3.063-3.064V8.775"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.287 15.146-.089-.241a3.31 3.31 0 0 0-1.956-1.96l-.24-.088.24-.09a3.31 3.31 0 0 0 1.956-1.958l.09-.24.088.24a3.31 3.31 0 0 0 1.956 1.959l.24.089-.24.089a3.31 3.31 0 0 0-1.956 1.959zM14.963 16.239a1.56 1.56 0 0 0-1.036-1.038c.496-.15.885-.54 1.036-1.037.151.497.54.886 1.036 1.037-.497.152-.885.54-1.036 1.038"
    />
  </Svg>
);
export default IconlystHomeAiAltLight;
