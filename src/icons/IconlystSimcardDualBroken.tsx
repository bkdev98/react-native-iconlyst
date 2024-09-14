import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardDualBroken = ({
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
      d="M7.947 20.999a3.05 3.05 0 0 1-3.053-3.052V9.284a3.053 3.053 0 0 1 3.053-3.052h4.158c.459 0 .896.187 1.214.517l3.11 3.24c.3.313.47.731.47 1.164v6.795A3.05 3.05 0 0 1 13.844 21h-2.95"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.377 13.318H9.416c-.835 0-1.354.589-1.354 1.423v1.699c0 .833.52 1.422 1.354 1.422h2.96c.835 0 1.354-.59 1.354-1.422v-1.7c0-.833-.521-1.422-1.353-1.422M20.108 7.94c0-.436-.164-.857-.468-1.169l-3.116-3.25A1.68 1.68 0 0 0 15.307 3H11.14a3.063 3.063 0 0 0-3.063 3.062v.148M16.898 17.805h.155a3.06 3.06 0 0 0 3.055-3.054v-3.405"
    />
  </Svg>
);
export default IconlystSimcardDualBroken;
