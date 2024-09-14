import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTypeScriptOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.78V8.03c0-3.46 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.94c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.94c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.03c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M15.995 17.913c-.87 0-1.74-.4-2.26-1.06-.26-.33-.2-.8.13-1.05.33-.26.8-.2 1.05.13.27.34.81.54 1.27.47q.495-.075.66-.51c.08-.2.06-.39-.03-.57-.12-.23-.37-.4-.65-.45-.75-.17-1.63-.36-2.18-1.25-.5-.8-.44-1.79.16-2.52.42-.52 1.08-.84 1.81-.86.7-.02 1.37.25 1.81.74.28.31.25.78-.06 1.06s-.78.25-1.06-.06c-.14-.16-.39-.25-.66-.24-.28 0-.54.12-.69.3-.19.23-.21.53-.05.78.21.34.55.43 1.18.57.73.15 1.35.6 1.68 1.21.31.56.35 1.21.12 1.82-.3.79-.97 1.32-1.84 1.46q-.21.03-.42.03zM9.946 17.91c-.41 0-.75-.34-.75-.75v-5.41h-1.3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.11c.41 0 .75.34.75.75s-.34.75-.75.75h-1.3v5.41c0 .41-.34.75-.75.75z"
    />
  </Svg>
);
export default IconlystTypeScriptOutline;
