import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftOnenoteLight = ({
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
      d="M7.866 16.871v.835c0 1.588.998 2.718 2.597 2.718h7.951c1.599 0 2.586-1.13 2.586-2.718V6.293c0-1.589-.987-2.719-2.586-2.719h-7.952c-1.598 0-2.596 1.13-2.596 2.719v.835"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.998 8.023h-3.602a.877.877 0 0 0-.876.877v11.525M16.52 16.473h4.478M20.998 12.113H16.52M5.588 7.125h4.564c1.596 0 2.589 1.126 2.589 2.72v4.301c0 1.595-.993 2.72-2.589 2.72H5.588C3.993 16.867 3 15.742 3 14.147v-4.3c0-1.595.997-2.721 2.588-2.721"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.313 13.767v-3.603l3.106 3.66v-3.66"
    />
  </Svg>
);
export default IconlystMicrosoftOnenoteLight;
