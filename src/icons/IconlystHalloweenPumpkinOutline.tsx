import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHalloweenPumpkinOutline = ({
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
      d="M12.505 6.913c-.819 0-1.543.4-1.994 1.024a.75.75 0 0 1-1.196.026.5.5 0 0 0-.106-.087 2.972 2.972 0 0 0-3.504.24c-1.272 1.097-1.615 3.149-1.391 4.991.236 1.905 1.03 3.812 2.29 5.225 1.055 1.173 2.52 1.688 3.99 1.278a.75.75 0 0 1 .577.073c.39.226.831.348 1.325.348.498 0 .955-.124 1.343-.348a.75.75 0 0 1 .577-.073c1.47.41 2.936-.105 3.992-1.278 1.26-1.413 2.052-3.32 2.28-5.222v-.002c.223-1.843-.12-3.895-1.392-4.993a2.96 2.96 0 0 0-3.5-.237 1 1 0 0 0-.098.08.75.75 0 0 1-1.217-.024 2.39 2.39 0 0 0-1.976-1.021m2.7-.429a3.9 3.9 0 0 0-2.7-1.071 3.94 3.94 0 0 0-2.703 1.07l-.143-.077-.013-.007c-1.598-.805-3.542-.6-4.917.578l-.002.001C2.88 8.57 2.58 11.273 2.825 13.288v.003c.27 2.17 1.172 4.373 2.66 6.04l.002.003c1.314 1.461 3.222 2.23 5.212 1.795a4.1 4.1 0 0 0 1.797.402c.64 0 1.258-.137 1.814-.402 1.99.436 3.9-.334 5.214-1.795l.002-.003c1.488-1.667 2.391-3.871 2.65-6.043.245-2.015-.056-4.718-1.901-6.31l-.003-.001a4.46 4.46 0 0 0-4.907-.578l-.012.006-.025.013z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.63 3.946-.003.001-.036.011a2.213 2.213 0 0 0-.692.392c-.357.302-.743.828-.72 1.794a.75.75 0 1 1-1.5.036c-.035-1.47.587-2.415 1.253-2.976a3.7 3.7 0 0 1 1.19-.67l.127-.039.011-.002.004-.002h.003l.179.728-.178-.728a.75.75 0 0 1 .362 1.455M8.92 14.686a.75.75 0 0 1 1.053-.124l.948.749 1.163-.775a.75.75 0 0 1 .831 0l1.164.775.948-.749a.75.75 0 0 1 .93 1.177l-1.375 1.086a.75.75 0 0 1-.88.036l-1.202-.8-1.2.8a.75.75 0 0 1-.881-.036L9.043 15.74a.75.75 0 0 1-.124-1.053M7.827 10.987a.75.75 0 0 1 .95-.47l1.324.447a.75.75 0 0 1-.48 1.42l-1.324-.447a.75.75 0 0 1-.47-.95M17.175 10.987a.75.75 0 0 1-.47.95l-1.324.448a.75.75 0 0 1-.48-1.421l1.323-.448a.75.75 0 0 1 .95.47"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHalloweenPumpkinOutline;