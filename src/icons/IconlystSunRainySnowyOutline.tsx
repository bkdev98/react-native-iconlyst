import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunRainySnowyOutline = ({
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
      d="M17.595 2.443c.4.11.635.522.525.922l-.005.02a.75.75 0 0 1-1.447-.396l.006-.02a.75.75 0 0 1 .921-.526m-5.069.645a.75.75 0 0 1 1.023.28l.009.016a.75.75 0 1 1-1.303.743l-.01-.016a.75.75 0 0 1 .281-1.023m9.123 2.482a.75.75 0 0 1-.28 1.023l-.037.02a.75.75 0 0 1-.742-1.303l.036-.02a.75.75 0 0 1 1.023.28m-.845 4.687a.75.75 0 0 1 .921-.525l.027.008a.75.75 0 1 1-.396 1.446l-.027-.007a.75.75 0 0 1-.525-.922M15.826 6.12c-1 0-1.876.53-2.363 1.326a.75.75 0 1 1-1.28-.782 4.265 4.265 0 1 1 5.999 5.778.75.75 0 0 1-.83-1.25 2.765 2.765 0 0 0-1.527-5.072"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.36 7.926c.78-1.03 2.03-1.855 3.824-1.855s3.044.825 3.824 1.855a5.5 5.5 0 0 1 1.015 2.347c.87.126 1.67.492 2.294 1.09.79.756 1.247 1.836 1.247 3.121a4.26 4.26 0 0 1-2.506 3.883A.75.75 0 1 1 16.44 17a2.76 2.76 0 0 0 1.624-2.516c0-.915-.317-1.59-.785-2.038-.473-.453-1.15-.721-1.943-.722a.75.75 0 0 1-.75-.75c0-.534-.222-1.412-.774-2.143-.53-.7-1.356-1.26-2.627-1.26-1.272 0-2.098.56-2.628 1.26-.552.73-.774 1.609-.774 2.143a.75.75 0 0 1-.744.75c-.796.007-1.475.277-1.949.729-.468.446-.785 1.117-.785 2.031A2.76 2.76 0 0 0 5.929 17a.75.75 0 1 1-.618 1.367 4.26 4.26 0 0 1-2.506-3.883c0-1.286.459-2.362 1.25-3.116.623-.596 1.422-.961 2.29-1.09a5.5 5.5 0 0 1 1.016-2.352M5.298 21.852a.75.75 0 0 1-.372-.993l.455-1a.75.75 0 1 1 1.365.621l-.455 1a.75.75 0 0 1-.993.372"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.487 18.852a.75.75 0 0 1-.372-.993l.455-1a.75.75 0 0 1 1.366.621l-.455 1a.75.75 0 0 1-.994.372M16.294 21.886a.75.75 0 0 0 .797-.208.755.755 0 1 0-.797.208M10.834 21.886a.75.75 0 0 0 .478 0 .75.75 0 0 0 .516-.716.755.755 0 1 0-.994.716M9.01 18.89a.75.75 0 0 0 .796-.207.755.755 0 1 0-.797.208"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunRainySnowyOutline;
