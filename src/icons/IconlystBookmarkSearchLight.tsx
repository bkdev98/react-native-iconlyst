import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkSearchLight = ({
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
      d="M14.957 3c2.52 0 4.27 1.024 4.27 3.586l.005 13.526a.884.884 0 0 1-1.318.77l-5.888-3.326-5.943 3.331a.882.882 0 0 1-1.315-.77V6.414C4.768 3.956 6.598 3 9.04 3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.26 11.42 1.255 1.252m-2.951-5.568a2.492 2.492 0 1 1-.001 4.984 2.492 2.492 0 0 1 .001-4.984"
    />
  </Svg>
);
export default IconlystBookmarkSearchLight;
