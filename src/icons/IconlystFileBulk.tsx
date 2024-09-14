import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFileBulk = ({
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
      d="M12.5 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.16 8.792a.75.75 0 0 0 .754-1.296c-1.02-.596-2.258-.345-2.946.597-.435.598-.608 1.329-.76 1.973l-.015.061-1.448-.271a.75.75 0 0 0-.875.6.75.75 0 0 0 .599.875l1.36.255-.14.557-.944-.178a.75.75 0 0 0-.276 1.476l.858.161c-.124.53-.253 1.078-.508 1.428-.237.322-.62.394-.981.186a.75.75 0 1 0-.755 1.296c.372.215.77.32 1.163.32a2.2 2.2 0 0 0 1.784-.918c.433-.596.606-1.324.757-1.966v-.003l.017-.066 1.449.271a.75.75 0 0 0 .276-1.475l-1.362-.254.14-.557.946.176a.75.75 0 0 0 .276-1.475l-.86-.16c.126-.53.255-1.078.51-1.428.236-.322.62-.393.98-.185"
    />
  </Svg>
);
export default IconlystFileBulk;
