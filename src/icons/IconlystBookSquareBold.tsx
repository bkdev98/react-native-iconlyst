import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookSquareBold = ({
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
      d="M11.25 14.812V9.587c-.527-.33-1.7-.958-3.014-.964v5.433c1.185.007 2.25.384 3.014.756M12.75 14.812V9.587c.526-.33 1.698-.958 3.012-.964v5.433c-1.184.007-2.248.384-3.012.756"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.782 21.5h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53m4.635-4.747.04-.028c.018-.015 1.916-1.44 3.94-1.123a.751.751 0 0 0 .865-.741V7.93a.75.75 0 0 0-.63-.74c-2.014-.328-3.816.589-4.632 1.095-.817-.505-2.616-1.415-4.632-1.095a.75.75 0 0 0-.632.74v6.93a.752.752 0 0 0 .865.742c2.016-.312 3.888 1.082 3.941 1.122h.001l.002.002a.75.75 0 0 0 .872.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookSquareBold;
