import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRecieveBroken = ({
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
      d="M21.25 11.61V8.536c0-2.44-1.522-4.166-3.966-4.166H7.214c-2.437 0-3.964 1.725-3.964 4.166M11.138 19.288H7.214c-2.444 0-3.965-1.725-3.965-4.166v-3.294M7.2 9.344h10.098M14.929 17.583h6.321M16.985 15.535l-2.056 2.047 2.056 2.048"
    />
  </Svg>
);
export default IconlystBankCardRecieveBroken;
