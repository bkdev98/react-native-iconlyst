import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLockOutline = ({
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
      d="M9.454 10.86a2.796 2.796 0 1 1 5.592 0c0 .723-.276 1.375-.721 1.866l.48 1.445a1.617 1.617 0 0 1-1.535 2.127h-2.04a1.616 1.616 0 0 1-1.535-2.126l.48-1.446a2.77 2.77 0 0 1-.72-1.865m2.796-1.296c-.716 0-1.296.58-1.296 1.297 0 .422.205.797.531 1.038a.75.75 0 0 1 .267.84l-.633 1.905a.116.116 0 0 0 .11.154h2.041a.117.117 0 0 0 .112-.153l-.634-1.907a.75.75 0 0 1 .267-.84c.326-.24.531-.615.531-1.037 0-.717-.58-1.297-1.296-1.297"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.25 22.709a.7.7 0 0 1-.217-.032c-.321-.1-7.856-2.453-7.856-9.048 0-1.835-.025-3.161-.042-4.133-.044-2.434-.054-2.941.583-3.577.755-.754 6.448-2.71 7.532-2.71 1.145 0 6.765 1.937 7.534 2.712.635.64.625 1.146.58 3.582-.016.972-.04 2.3-.04 4.126 0 6.594-7.536 8.951-7.856 9.048a.8.8 0 0 1-.218.032m0-18a30 30 0 0 0-6.485 2.283c-.16.16-.166.492-.13 2.476.017.979.042 2.314.042 4.161 0 4.912 5.41 7.121 6.573 7.538 1.163-.417 6.574-2.626 6.574-7.538 0-1.843.025-3.175.042-4.152.035-1.991.029-2.323-.146-2.5-2.064-1-4.234-1.76-6.47-2.268"
    />
  </Svg>
);
export default IconlystShieldLockOutline;
