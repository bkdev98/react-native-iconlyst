import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunglassesOutline = ({
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
      d="M12.27 21.553A9.554 9.554 0 1 1 21.826 12a9.565 9.565 0 0 1-9.554 9.554m0-17.609A8.054 8.054 0 1 0 20.326 12a8.063 8.063 0 0 0-8.054-8.055"
    />
    <Path
      fill={props.color}
      d="M16.65 12.536h-2.248a1.47 1.47 0 0 1-1.448-1.259l-.293-2.084a1.462 1.462 0 0 1 1.448-1.666h2.794a1.463 1.463 0 0 1 1.452 1.642l-.26 2.084a1.464 1.464 0 0 1-1.445 1.283m.22-3.55-2.757.041.33 2.041 2.172-.03zM10.175 12.536H7.93a1.47 1.47 0 0 1-1.448-1.259L6.19 9.193a1.463 1.463 0 0 1 1.448-1.666h2.795a1.464 1.464 0 0 1 1.45 1.642l-.258 2.084a1.46 1.46 0 0 1-1.45 1.283m.22-3.55-2.757.041.33 2.041 2.173-.03zM12.271 17.232a4.3 4.3 0 0 1-3.413-1.743.75.75 0 1 1 1.19-.915 2.754 2.754 0 0 0 3.972.5.75.75 0 1 1 .967 1.147 4.17 4.17 0 0 1-2.716 1.01"
    />
    <Path
      fill={props.color}
      d="M21.25 10.719h-3.749a.75.75 0 0 1 0-1.5h3.749a.75.75 0 1 1 0 1.5m-14.194 0H3.25a.75.75 0 0 1 0-1.5h3.806a.75.75 0 0 1 0 1.5M13.533 10.719h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystSunglassesOutline;
