import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainNetworkOutline = ({
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
      d="M7.63 13.944a.75.75 0 0 1 .783.716c.032.724.454 1.132 1.01 1.287.6.167 1.29.014 1.716-.399a.75.75 0 0 1 1.189.195c.192.372.469.543.752.621.307.085.617.056.78.012a.75.75 0 0 1 .887.432l1.023 2.42h.568v-1.053a.75.75 0 0 1 .705-.75c2.069-.122 2.9-.81 3.201-1.364.172-.315.216-.654.171-.968a.75.75 0 1 1 1.485-.213c.086.6.004 1.271-.339 1.9-.578 1.059-1.79 1.828-3.723 2.078v1.04a.83.83 0 0 1-.828.83h-1.687a.83.83 0 0 1-.762-.506l-.974-2.304c-.28.008-.592-.02-.908-.108a2.66 2.66 0 0 1-1.183-.685 3.4 3.4 0 0 1-2.477.267c-1.1-.308-2.04-1.215-2.104-2.665a.75.75 0 0 1 .716-.783m8.313 5.694"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.62 8.899a.75.75 0 0 1 .205 1.04c-1.037 1.546-.595 3.334.693 4.116.419.254.951.376 1.477.366.534-.01.978-.154 1.233-.336.662-.47.994-1.27.944-1.796a.75.75 0 0 1 1.493-.143c.107 1.126-.525 2.42-1.567 3.161-.566.403-1.328.6-2.074.614-.756.014-1.58-.156-2.284-.584-2.09-1.27-2.626-4.05-1.16-6.233a.75.75 0 0 1 1.04-.205M11.44 3.983a.75.75 0 0 1-.642.844c-1.451.198-2.598.874-3.367 1.328l-.064.037A.75.75 0 1 1 6.606 4.9l.092-.055c.77-.455 2.141-1.265 3.898-1.504a.75.75 0 0 1 .844.642"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.228 9.574c.147.476.506.896 1.234 1.081a.75.75 0 0 1-.37 1.454c-1.223-.312-1.993-1.106-2.297-2.094-.293-.952-.135-2.012.32-2.904.456-.897 1.244-1.688 2.297-2.065 1.069-.384 2.332-.313 3.667.38a.75.75 0 1 1-.69 1.33c-1.012-.524-1.842-.524-2.47-.298-.645.231-1.16.729-1.468 1.334-.311.611-.38 1.268-.223 1.781M17.392 11.205a.75.75 0 0 1 .75.75v.046a.75.75 0 0 1-1.5 0v-.046a.75.75 0 0 1 .75-.75M21.03 7.57a5.83 5.83 0 0 0-7.28 0 .75.75 0 1 1-.938-1.17 7.33 7.33 0 0 1 9.157 0 .75.75 0 1 1-.938 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.003 10.092a2.496 2.496 0 0 0-3.214.004.75.75 0 1 1-.974-1.141 3.996 3.996 0 0 1 5.155-.01.75.75 0 0 1-.967 1.147"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiBrainNetworkOutline;
