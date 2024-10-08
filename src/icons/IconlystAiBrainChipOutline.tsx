import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainChipOutline = ({
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
      d="M7.63 13.944a.75.75 0 0 1 .783.716c.032.724.454 1.132 1.01 1.287.6.167 1.29.014 1.716-.399a.75.75 0 0 1 1.189.195c.192.372.469.543.752.621.307.085.617.056.78.012a.75.75 0 0 1 .887.432l1.023 2.42h.568v-1.053a.75.75 0 0 1 .705-.75c1.584-.093 2.445-.523 2.889-.957.431-.42.543-.917.486-1.354a.75.75 0 1 1 1.488-.194 3.06 3.06 0 0 1-.925 2.621c-.683.667-1.715 1.133-3.143 1.317v1.04a.83.83 0 0 1-.828.83h-1.687a.83.83 0 0 1-.762-.506l-.974-2.304c-.28.008-.592-.02-.908-.108a2.66 2.66 0 0 1-1.183-.685 3.4 3.4 0 0 1-2.477.267c-1.1-.308-2.04-1.215-2.104-2.665a.75.75 0 0 1 .716-.783m8.313 5.694"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.62 8.899a.75.75 0 0 1 .205 1.04c-1.037 1.546-.595 3.334.693 4.116.419.254.951.376 1.477.366.534-.01.978-.154 1.233-.336.404-.287.703-.715.85-1.145a.75.75 0 0 1 1.42.485 3.9 3.9 0 0 1-1.4 1.882c-.566.403-1.328.6-2.074.614-.756.014-1.58-.156-2.284-.584-2.09-1.27-2.626-4.05-1.16-6.233a.75.75 0 0 1 1.04-.205M11.277 3.99a.75.75 0 0 1-.623.858c-1.384.221-2.479.867-3.222 1.306l-.065.038a.75.75 0 0 1-.761-1.293l.092-.054c.743-.44 2.05-1.211 3.72-1.478a.75.75 0 0 1 .859.622"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.228 9.574c.147.476.506.896 1.234 1.081a.75.75 0 0 1-.37 1.454c-1.223-.312-1.993-1.106-2.297-2.094-.293-.952-.135-2.012.32-2.904.456-.897 1.244-1.688 2.297-2.065 1.069-.384 2.332-.313 3.667.38a.75.75 0 1 1-.69 1.33c-1.012-.524-1.842-.524-2.47-.298-.645.231-1.16.729-1.468 1.334-.311.611-.38 1.268-.223 1.781M13.874 5.67c.407-.436.975-.664 1.604-.664h2.548c.63 0 1.199.228 1.605.665.4.431.588 1.005.588 1.604v2.401c0 .598-.188 1.171-.588 1.602-.407.437-.974.665-1.605.665h-2.547c-.631 0-1.199-.228-1.606-.664-.401-.43-.59-1.003-.59-1.603v-2.4c0-.602.19-1.176.591-1.606m1.097 1.023c-.1.107-.188.293-.188.582v2.401c0 .288.088.473.187.58.094.1.249.187.508.187h2.548c.26 0 .414-.087.506-.187.099-.106.187-.29.187-.58v-2.4c0-.292-.089-.478-.187-.584-.093-.1-.246-.186-.506-.186h-2.547c-.258 0-.414.086-.508.187"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.96 7.352a.75.75 0 0 1-.75.75h-1.74a.75.75 0 0 1 0-1.5h1.74a.75.75 0 0 1 .75.75M21.96 9.596a.75.75 0 0 1-.75.75h-1.74a.75.75 0 0 1 0-1.5h1.74a.75.75 0 0 1 .75.75M14.784 7.352a.75.75 0 0 1-.75.75h-1.74a.75.75 0 0 1 0-1.5h1.74a.75.75 0 0 1 .75.75M14.784 9.596a.75.75 0 0 1-.75.75h-1.74a.75.75 0 0 1 0-1.5h1.74a.75.75 0 0 1 .75.75M17.875 13.682a.75.75 0 0 1-.75-.75v-1.74a.75.75 0 0 1 1.5 0v1.74a.75.75 0 0 1-.75.75M15.63 13.682a.75.75 0 0 1-.75-.75v-1.74a.75.75 0 0 1 1.5 0v1.74a.75.75 0 0 1-.75.75M17.875 6.506a.75.75 0 0 1-.75-.75v-1.74a.75.75 0 0 1 1.5 0v1.74a.75.75 0 0 1-.75.75M15.63 6.506a.75.75 0 0 1-.75-.75v-1.74a.75.75 0 0 1 1.5 0v1.74a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiBrainChipOutline;
