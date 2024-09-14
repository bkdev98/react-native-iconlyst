import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePremiereRushCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.136 9.542c.292-.031.642-.046.978-.006.381.045.67.15.853.305.152.129.301.348.301.814s-.15.694-.308.832c-.188.162-.48.274-.86.327-.332.046-.676.04-.964.015zm0 3.791c.339.023.75.025 1.17-.033.527-.074 1.142-.252 1.636-.68.522-.452.826-1.112.826-1.965s-.304-1.513-.833-1.96c-.498-.42-1.118-.587-1.645-.649a6 6 0 0 0-1.429.018 7 7 0 0 0-.596.1l-.039.01-.012.002-.004.001H7.21s-.001.001.177.73l-.178-.729a.75.75 0 0 0-.572.728v6.054a.75.75 0 0 0 1.5 0zM13.71 10.106a.75.75 0 0 1 .75.75v2.456a.9.9 0 0 0 1.8 0v-2.456a.75.75 0 0 1 1.5 0v2.456a2.4 2.4 0 1 1-4.8 0v-2.456a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.471 11.838a.75.75 0 0 1 .995.368l1.135 2.465a.75.75 0 0 1-1.363.627l-1.134-2.465a.75.75 0 0 1 .367-.995"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobePremiereRushCircleOutline;
