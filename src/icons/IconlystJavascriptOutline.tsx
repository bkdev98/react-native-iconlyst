import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJavascriptOutline = ({
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
      d="M16.21 21.75H7.78c-3.31 0-5.53-2.32-5.53-5.78V8.03c0-3.46 2.22-5.78 5.53-5.78h8.44c3.31 0 5.53 2.32 5.53 5.78v7.94c0 3.46-2.22 5.78-5.53 5.78zm-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.94c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.03c0-2.6-1.58-4.28-4.03-4.28H7.77z"
    />
    <Path
      fill={props.color}
      d="M15.99 17.908c-.87 0-1.74-.4-2.26-1.06-.25-.33-.2-.8.13-1.05s.8-.2 1.05.13c.27.34.8.54 1.27.47q.495-.075.66-.51c.08-.2.06-.39-.03-.57a.9.9 0 0 0-.65-.45c-.72-.15-1.61-.33-2.18-1.23-.5-.81-.44-1.8.16-2.53.42-.52 1.08-.84 1.81-.86.71-.03 1.38.25 1.82.74.28.31.25.78-.06 1.06s-.78.25-1.06-.06c-.14-.16-.39-.26-.66-.24-.28 0-.54.12-.68.3-.19.23-.21.54-.05.8.2.32.52.42 1.21.56.71.15 1.32.6 1.66 1.2.31.56.35 1.21.12 1.82-.3.79-.97 1.32-1.84 1.46q-.21.03-.42.03zM9.95 18.03c-1.31 0-2.38-1.07-2.38-2.38 0-.41.34-.75.75-.75s.75.34.75.75c0 .49.4.88.88.88s.88-.39.88-.88V11c0-.41.34-.75.75-.75s.75.34.75.75v4.65c0 1.31-1.07 2.38-2.38 2.38"
    />
  </Svg>
);
export default IconlystJavascriptOutline;
