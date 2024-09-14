import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatCodeBold = ({
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
      d="m17.025 11.442-2.286 2.286a.75.75 0 0 1-1.061-1.06l1.756-1.756-1.756-1.756a.75.75 0 1 1 1.061-1.06l2.286 2.285a.75.75 0 0 1 0 1.061m-6.703 1.225a.75.75 0 1 1-1.061 1.061l-2.287-2.286a.753.753 0 0 1 0-1.06l2.287-2.287a.75.75 0 1 1 1.061 1.061l-1.756 1.756zm6.739-9.808H6.94A4.445 4.445 0 0 0 2.5 7.3v6.915a4.444 4.444 0 0 0 4.44 4.44h1.067c.443 0 .86.172 1.173.485l1.422 1.422c.385.384.892.577 1.398.577s1.013-.193 1.398-.578l1.422-1.42a1.65 1.65 0 0 1 1.173-.487h1.068a4.444 4.444 0 0 0 4.439-4.439V7.3a4.445 4.445 0 0 0-4.439-4.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatCodeBold;
