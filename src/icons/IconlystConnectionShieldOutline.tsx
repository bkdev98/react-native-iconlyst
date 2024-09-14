import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectionShieldOutline = ({
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
      d="M11.81 16.89a.75.75 0 0 0 .881 0l4.202-3.053a.75.75 0 0 0 .272-.839l-1.605-4.94a.75.75 0 0 0-.713-.518H9.653a.75.75 0 0 0-.713.519l-1.605 4.94a.75.75 0 0 0 .273.838zm-2.88-3.947 1.268-3.903h4.104l1.268 3.904-3.32 2.412z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.58a.75.75 0 0 1 .75.75v4.36a.75.75 0 0 1-1.5 0V3.33a.75.75 0 0 1 .75-.75M20.275 9.301a.75.75 0 0 1-.428.97l-3.118 1.211a.75.75 0 0 1-.542-1.398l3.117-1.21a.75.75 0 0 1 .97.427M4.232 9.301a.75.75 0 0 0 .428.97l3.117 1.211a.75.75 0 0 0 .543-1.398l-3.117-1.21a.75.75 0 0 0-.97.427M14.42 15.118a.75.75 0 0 1 1.05.16l2.062 2.804a.75.75 0 1 1-1.208.889l-2.063-2.804a.75.75 0 0 1 .16-1.049M10.1 15.118a.75.75 0 0 0-1.05.16l-2.062 2.804a.75.75 0 1 0 1.208.889l2.063-2.804a.75.75 0 0 0-.16-1.049"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.25 22.037a.7.7 0 0 1-.217-.032c-.321-.1-7.856-2.453-7.856-9.048 0-1.835-.025-3.161-.042-4.133-.044-2.434-.054-2.941.583-3.577.755-.754 6.448-2.71 7.532-2.71 1.145 0 6.765 1.937 7.534 2.712.635.64.625 1.146.581 3.582-.017.972-.041 2.3-.041 4.126 0 6.594-7.536 8.95-7.856 9.048a.7.7 0 0 1-.218.032m0-18A30 30 0 0 0 5.765 6.32c-.16.16-.166.492-.13 2.476.017.979.042 2.314.042 4.16 0 4.913 5.41 7.122 6.573 7.539 1.163-.417 6.574-2.626 6.574-7.538 0-1.843.025-3.175.042-4.152.035-1.991.029-2.323-.146-2.5-2.063-1-4.234-1.761-6.47-2.268"
    />
  </Svg>
);
export default IconlystConnectionShieldOutline;
