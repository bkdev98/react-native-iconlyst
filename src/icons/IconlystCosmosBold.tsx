import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCosmosBold = ({
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
      d="m9.86 12.867-1.797 1.037a.33.33 0 0 0-.116.447.325.325 0 0 0 .44.111l1.793-1.037v-.373zM10.18 10.582 8.382 9.544a.326.326 0 0 0-.436.114.33.33 0 0 0-.033.25.3.3 0 0 0 .144.184l1.804 1.043.32-.184zM12.32 9.716V7.645a.32.32 0 0 0-.32-.32.32.32 0 0 0-.32.32v2.07l.32.186zM12 11.632l-.32.185v.37l.32.185.32-.185v-.37z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.357 15.095a1.83 1.83 0 0 1-2.483.673l-1.055-.61v1.207c0 1.003-.816 1.82-1.819 1.82a1.82 1.82 0 0 1-1.82-1.82v-1.207l-1.048.606c-.286.163-.598.24-.906.24a1.82 1.82 0 0 1-1.579-.903l-.003-.005a1.817 1.817 0 0 1 .665-2.488L8.36 12l-1.048-.607a1.817 1.817 0 0 1-.668-2.48l.003-.006a1.83 1.83 0 0 1 2.48-.666l1.053.608V7.645c0-1.004.816-1.82 1.82-1.82 1.003 0 1.82.816 1.82 1.82V8.85l1.048-.605a1.83 1.83 0 0 1 2.486.664c.244.43.307.92.182 1.387-.127.47-.43.86-.854 1.102L15.64 12l1.05.605a1.82 1.82 0 0 1 .668 2.489M12 2.505c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.68 14.29v2.075c0 .176.144.32.32.32a.32.32 0 0 0 .32-.32V14.29l-.32-.185zM14.14 11.135l1.798-1.04a.3.3 0 0 0 .15-.189.33.33 0 0 0-.035-.25.324.324 0 0 0-.44-.109l-1.793 1.035v.368zM14.14 12.868l-.32.186v.37l1.799 1.042c.152.088.35.035.437-.116a.33.33 0 0 0-.122-.447z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCosmosBold;
