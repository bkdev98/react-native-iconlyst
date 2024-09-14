import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFileBold = ({
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
      d="M15.848 8.305a.75.75 0 0 1-1.022.282c-.403-.23-.83-.147-1.09.209-.277.38-.414.967-.547 1.534l-.007.029.948.179a.749.749 0 1 1-.278 1.474l-1.033-.195-.164.653 1.475.278a.749.749 0 1 1-.278 1.474l-1.56-.295-.024.093c-.159.68-.339 1.45-.795 2.076-.454.627-1.128.96-1.836.96-.402 0-.815-.107-1.206-.33a.75.75 0 1 1 .74-1.303c.403.227.832.148 1.09-.208.276-.382.414-.97.547-1.537l.007-.03-.946-.176a.75.75 0 0 1 .277-1.474l1.032.194.164-.653-1.473-.277a.75.75 0 0 1 .277-1.474l1.56.294.022-.093c.16-.68.34-1.45.796-2.076.712-.983 1.964-1.242 3.042-.63a.75.75 0 0 1 .282 1.022m.37-5.8H7.781c-3.16 0-5.282 2.222-5.282 5.53v7.94c0 3.308 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFileBold;
