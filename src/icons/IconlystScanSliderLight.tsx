import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSliderLight = ({
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
      d="M10.867 3v18M14.26 4.086h1.445c2.59 0 4.208 1.83 4.208 4.422v6.988c0 2.583-1.617 4.413-4.208 4.413H14.26M10.87 19.91H8.288c-2.592 0-4.2-1.83-4.2-4.414V8.508c0-2.592 1.617-4.422 4.2-4.422h2.582"
    />
  </Svg>
);
export default IconlystScanSliderLight;
