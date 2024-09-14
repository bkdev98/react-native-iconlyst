import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCosmosBulk = ({
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
      d="M12.5 2.505c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.858 15.094a1.83 1.83 0 0 1-2.484.673l-1.055-.61v1.207c0 1.003-.816 1.82-1.819 1.82a1.82 1.82 0 0 1-1.82-1.82v-1.207l-1.047.606c-.286.163-.598.24-.906.24a1.82 1.82 0 0 1-1.58-.903l-.002-.005a1.817 1.817 0 0 1 .665-2.488L8.86 12l-1.047-.607a1.817 1.817 0 0 1-.668-2.48l.003-.006a1.83 1.83 0 0 1 2.48-.666l1.053.608V7.644c0-1.004.816-1.82 1.82-1.82 1.003 0 1.819.816 1.819 1.82V8.85l1.048-.605a1.83 1.83 0 0 1 2.487.664c.244.43.306.92.181 1.387-.127.47-.43.861-.854 1.102L16.14 12l1.049.605a1.82 1.82 0 0 1 .669 2.49m-5.678-3.277.32-.185.32.184v.37l-.32.185-.32-.184zm2.46-.683 1.798-1.04a.3.3 0 0 0 .15-.188.33.33 0 0 0-.035-.251.324.324 0 0 0-.44-.108L14.32 10.58v.369zm-1.82-3.49v2.071l-.32.185-.32-.185V7.644a.32.32 0 0 1 .32-.32.32.32 0 0 1 .32.32m-2.14 2.937L8.882 9.543a.326.326 0 0 0-.436.114.33.33 0 0 0-.033.25.3.3 0 0 0 .144.184l1.804 1.043.32-.184zm-2.117 3.323 1.797-1.037.32.185v.373l-1.793 1.037a.325.325 0 0 1-.44-.111.33.33 0 0 1 .116-.447m3.617.386v2.074c0 .176.144.32.32.32a.32.32 0 0 0 .32-.32V14.29l-.32-.185zm2.14-1.237.32-.186 1.794 1.035a.33.33 0 0 1 .122.447.32.32 0 0 1-.437.116l-1.8-1.041z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCosmosBulk;
