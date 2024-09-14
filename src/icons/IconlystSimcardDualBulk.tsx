import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardDualBulk = ({
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
      d="M18.732 14.875c0 1.148-.85 2.093-1.953 2.264v.827q0 .349-.062.68c1.96-.152 3.515-1.775 3.515-3.771V8.064c0-.643-.243-1.246-.678-1.688l-3.118-3.254a2.43 2.43 0 0 0-1.756-.747h-4.168c-2.01 0-3.64 1.567-3.783 3.54q.291-.047.596-.047h.91c.162-1.117 1.115-1.993 2.277-1.993h4.168c.256 0 .497.104.677.288l3.121 3.257a.9.9 0 0 1 .254.644z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.773 17.14v-5.865c0-.56-.224-1.11-.61-1.505l-3.11-3.242a2.2 2.2 0 0 0-1.574-.673H8.238l-.912.013q-.305 0-.598.047c-1.677.285-2.96 1.736-2.96 3.49v8.67a3.556 3.556 0 0 0 3.554 3.55h5.898a3.55 3.55 0 0 0 3.496-2.979h.002q.061-.331.062-.68z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.854 16.564c0 1.258-.885 2.171-2.103 2.171h-2.96c-1.22 0-2.105-.913-2.105-2.17v-1.7c0-1.258.885-2.17 2.104-2.17h2.961c1.218 0 2.103.912 2.103 2.17zM8.79 14.196h2.96c.5 0 .605.364.605.67v1.699c0 .306-.105.67-.604.67H8.79c-.5 0-.603-.364-.603-.67v-1.7c0-.305.104-.67.603-.67"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSimcardDualBulk;
