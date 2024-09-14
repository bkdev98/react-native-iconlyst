import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackwardCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.57 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.535 15.431c.527-.303.865-.83.951-1.5.137-1.223.138-2.52-.001-3.868-.081-.655-.408-1.184-.921-1.487-.529-.313-1.18-.343-1.838-.08a10 10 0 0 0-2.958 1.873l-.005.004c-.49.456-.758 1.037-.756 1.638.003.597.273 1.172.757 1.616a9.9 9.9 0 0 0 2.952 1.872c.285.121.578.181.864.181.338 0 .665-.083.955-.249m-5.317.54a.752.752 0 0 0 .413-1.377c-.459-.302-1.765-1.22-2.296-1.848a1.126 1.126 0 0 1-.001-1.494c.501-.584 1.833-1.535 2.304-1.852a.751.751 0 0 0-.838-1.244c-.19.128-1.881 1.276-2.609 2.126-.858 1.02-.857 2.433.002 3.436.768.909 2.505 2.058 2.611 2.128l.003.002a.75.75 0 0 0 .411.123m4.068-6.083c.209-.083.396-.091.514-.021.14.083.183.274.194.365a16.6 16.6 0 0 1 .004 3.52c-.018.127-.066.296-.208.377-.125.072-.303.068-.494-.012a8.5 8.5 0 0 1-2.516-1.594c-.124-.113-.271-.295-.272-.518-.001-.225.148-.412.274-.53a8.5 8.5 0 0 1 2.504-1.587"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackwardCircleBulk;
