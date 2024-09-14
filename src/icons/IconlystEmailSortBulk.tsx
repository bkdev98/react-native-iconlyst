import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSortBulk = ({
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
      d="M13.5 19.238a.21.21 0 0 0-.119-.186c-.258-.128-.5-.3-.71-.524a2.5 2.5 0 0 1 .123-3.533l1.5-1.4a2.5 2.5 0 0 1 3.412 0l.165.154c.09.084.232.068.31-.026.458-.55 1.147-.9 1.919-.9q.227.001.44.046c.131.027.26-.069.26-.203V8.423c.1-3.2-2.1-5.6-5.1-5.6H6.8c-2.9 0-5.1 2.4-5.1 5.6v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.2 1.4 3.5 1.4h6.5a.2.2 0 0 0 .2-.2z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.5 12.522-4.1-3.3c-.3-.3-.4-.7-.1-1.1.3-.3.7-.4 1.1-.1l4.1 3.3c.5.4 1.2.4 1.7 0l4-3.3c.3-.3.8-.2 1.1.1.2.4.1.9-.2 1.1l-4 3.3c-.5.4-1.2.6-1.8.6q-.9 0-1.8-.6M18.012 16.274l-1.5-1.4a.747.747 0 0 0-1.023 0l-1.5 1.4a.75.75 0 1 0 1.023 1.096l.238-.223v3.28a.75.75 0 0 0 1.5 0v-3.28l.239.223a.751.751 0 0 0 1.06-.036.75.75 0 0 0-.037-1.06M22.098 18.31a.75.75 0 0 0-1.06-.037l-.238.222v-3.338a.75.75 0 0 0-1.5 0v3.338l-.239-.222a.75.75 0 0 0-1.023 1.098l1.5 1.4a.75.75 0 0 0 1.023 0l1.5-1.4a.75.75 0 0 0 .037-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailSortBulk;
