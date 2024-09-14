import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardDualLight = ({
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
      d="M11.605 6.232c.459 0 .896.187 1.214.517l3.11 3.241c.3.312.47.73.47 1.164v6.794A3.05 3.05 0 0 1 13.344 21H7.447a3.05 3.05 0 0 1-3.053-3.053V9.285a3.053 3.053 0 0 1 3.053-3.053z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.877 13.318H8.916c-.835 0-1.354.589-1.354 1.423v1.699c0 .833.52 1.422 1.354 1.422h2.96c.835 0 1.354-.59 1.354-1.422v-1.7c0-.833-.521-1.422-1.353-1.422M16.397 17.805h.156a3.06 3.06 0 0 0 3.055-3.054V7.94c0-.436-.164-.857-.468-1.169l-3.116-3.25A1.68 1.68 0 0 0 14.807 3H10.64a3.063 3.063 0 0 0-3.063 3.062v.148"
    />
  </Svg>
);
export default IconlystSimcardDualLight;
