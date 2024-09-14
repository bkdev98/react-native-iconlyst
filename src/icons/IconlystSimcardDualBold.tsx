import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardDualBold = ({
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
      d="M11.75 14.195H8.79c-.5 0-.603.364-.603.67v1.7c0 .305.104.67.603.67h2.96c.5 0 .605-.365.605-.67v-1.7c0-.306-.105-.67-.604-.67"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.733 14.875c0 1.15-.854 2.097-1.96 2.265v-5.865c0-.56-.224-1.11-.61-1.505l-3.11-3.242a2.2 2.2 0 0 0-1.574-.673H8.234a2.31 2.31 0 0 1 2.28-1.98h4.168c.256 0 .497.104.677.288l3.12 3.257a.9.9 0 0 1 .255.644zm-4.879 1.689c0 1.258-.884 2.171-2.102 2.171H8.79c-1.219 0-2.104-.913-2.104-2.171v-1.699c0-1.258.885-2.17 2.104-2.17h2.962c1.217 0 2.102.912 2.102 2.17zm5.7-10.188-3.117-3.254a2.43 2.43 0 0 0-1.757-.747h-4.167c-2.01 0-3.644 1.567-3.786 3.54-1.677.285-2.96 1.736-2.96 3.49v8.67a3.556 3.556 0 0 0 3.554 3.55h5.898a3.55 3.55 0 0 0 3.496-2.979c1.962-.15 3.518-1.774 3.518-3.771V8.064c0-.643-.244-1.246-.678-1.688"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSimcardDualBold;
