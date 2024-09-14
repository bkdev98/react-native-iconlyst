import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailPrivacyBulk = ({
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
      d="M14.063 17.179c0-.672-.011-1.126-.017-1.441-.02-.84-.04-1.79.847-2.68.859-.857 3.604-1.633 4.37-1.633.155 0 .454.05.822.136a.307.307 0 0 0 .378-.296v-2.74c0-3.2-2.2-5.6-5.1-5.6h-9c-2.9 0-5.1 2.4-5.1 5.6v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.2 1.4 3.5 1.4h8.02c.242 0 .388-.276.272-.49a4.9 4.9 0 0 1-.592-2.556"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.863 13.225q-.9 0-1.8-.6l-4.1-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4.1 3.3c.5.4 1.2.4 1.7 0l4-3.3c.3-.3.8-.2 1.1.1.2.4.2.9-.2 1.1l-4 3.3c-.5.4-1.2.6-1.8.6M17.287 15.333q.002.124.008.333c.008.337.018.827.018 1.559-.06 1.403 1.393 2.094 1.947 2.306.548-.215 1.953-.905 1.953-2.306 0-.775.012-1.28.019-1.616l.007-.272c-.512-.22-1.762-.63-2.024-.664-.218.027-1.431.438-1.928.66m1.976 5.742a.7.7 0 0 1-.206-.03c-.138-.038-3.367-.994-3.243-3.852a63 63 0 0 0-.02-1.494c-.016-.758-.022-1.043.338-1.403.4-.401 2.617-1.121 3.13-1.121.408 0 2.74.729 3.13 1.12.362.36.356.608.34 1.347-.007.33-.02.824-.02 1.583 0 2.828-3.104 3.78-3.236 3.819a.7.7 0 0 1-.213.03"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailPrivacyBulk;
