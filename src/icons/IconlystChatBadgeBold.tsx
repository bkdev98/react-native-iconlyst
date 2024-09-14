import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBadgeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.927 12.688c-.57 0-1.04-.47-1.04-1.04s.47-1.03 1.04-1.03 1.03.46 1.03 1.03-.46 1.04-1.03 1.04m-5.71 0c-.57 0-1.03-.47-1.03-1.04s.46-1.03 1.03-1.03 1.04.46 1.04 1.03-.47 1.04-1.04 1.04m6.78-7.54c0-.395.062-.77.172-1.123.042-.134-.056-.277-.197-.277H6.877c-2.31 0-4.19 1.88-4.19 4.2v6.94c0 2.32 1.88 4.2 4.19 4.2h1.07c.5 0 .99.21 1.35.56l1.42 1.43c.33.33.76.51 1.22.51s.9-.18 1.22-.51l1.42-1.43c.37-.36.84-.56 1.35-.56h1.07c2.31 0 4.19-1.88 4.19-4.2V8.87c0-.144-.147-.24-.283-.196a3.726 3.726 0 0 1-4.908-3.526"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.697 2.93a2.218 2.218 0 1 0 0 4.437 2.218 2.218 0 0 0 0-4.436"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatBadgeBold;
