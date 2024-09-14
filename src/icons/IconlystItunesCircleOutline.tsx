import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystItunesCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.47 9.417a.75.75 0 0 1-.586.884q-1.273.259-2.537.513-1.5.3-3.003.607a.75.75 0 0 1-.3-1.47q1.502-.305 3.012-.609l2.53-.51a.75.75 0 0 1 .884.585"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.928 6.393a1.293 1.293 0 0 1 1.551 1.265c.002 1.367.005 4.522.005 6.314.01.378-.022.878-.277 1.341l-.006.01c-.277.484-.747.802-1.209.97-.461.167-1.009.22-1.513.069a1.91 1.91 0 0 1-1.354-1.686v-.002a1.94 1.94 0 0 1 .876-1.73c.429-.277.9-.352 1.257-.389.152-.016.277-.025.387-.033.127-.01.235-.018.338-.033 0-1.59-.002-3.478-.004-4.576l-4.04.82.003 6.414c.011.378-.021.877-.277 1.34l-.006.012c-.28.487-.738.81-1.21.98a2.44 2.44 0 0 1-1.511.058 1.91 1.91 0 0 1-1.354-1.686v-.002a1.93 1.93 0 0 1 .875-1.73c.43-.278.901-.352 1.258-.39.151-.015.276-.024.386-.033.128-.01.235-.017.339-.032L9.44 8.565c0-.616.433-1.146 1.036-1.269zm-5.486 8.78a14 14 0 0 1-.348.03l-.223.019c-.305.032-.48.08-.598.157l-.006.004a.44.44 0 0 0-.186.372c.01.146.134.3.275.341l.011.003a.95.95 0 0 0 .575-.031.78.78 0 0 0 .413-.31c.063-.118.096-.3.088-.575zm5.542-1.175c-.123.013-.243.022-.349.03q-.128.01-.222.02c-.306.03-.48.08-.598.156l-.006.004a.44.44 0 0 0-.187.373c.01.145.134.3.275.34l.012.003c.136.042.35.04.571-.041.22-.08.358-.203.416-.3.063-.118.097-.3.088-.575z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystItunesCircleOutline;