import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowCloudOutline = ({
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
      d="M21.561 10.466c-2.813-.197-4.694 1.02-5.885 2.254a.75.75 0 0 1-1.079-1.042c1.411-1.46 3.701-2.944 7.069-2.708a.75.75 0 1 1-.105 1.496M21.38 7.764c-3.327-.233-5.6 1.14-7.075 2.59a.75.75 0 0 1-1.051-1.07c1.703-1.674 4.376-3.286 8.231-3.016a.75.75 0 1 1-.104 1.496"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.38 5.13c-4.804-.337-7.836 2.06-9.57 4.135a.75.75 0 1 1-1.15-.961C12.584 6 16.042 3.252 21.485 3.634a.75.75 0 1 1-.104 1.496"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.295 9.882c.762-1.006 1.981-1.81 3.732-1.81 1.75 0 2.97.804 3.731 1.81.55.725.863 1.558.988 2.278.841.128 1.616.484 2.221 1.062.773.738 1.221 1.788 1.221 3.043a4.16 4.16 0 0 1-2.474 3.808c-.599.24-1.192.33-1.657.33H6.992a4.5 4.5 0 0 1-1.68-.347 4.16 4.16 0 0 1-2.447-3.791c0-1.255.449-2.306 1.221-3.043.606-.578 1.38-.934 2.222-1.062.125-.72.439-1.553.987-2.278m1.197.905c-.534.706-.748 1.554-.748 2.069a.75.75 0 0 1-.743.75c-.77.007-1.423.267-1.88.702-.449.429-.756 1.074-.756 1.957a2.66 2.66 0 0 0 1.552 2.418c.4.16.794.22 1.075.22h8.065c.284 0 .68-.057 1.084-.216a2.66 2.66 0 0 0 1.547-2.422c0-.883-.307-1.529-.756-1.958-.456-.434-1.11-.694-1.879-.701a.75.75 0 0 1-.743-.75c0-.515-.214-1.363-.748-2.068-.51-.675-1.307-1.216-2.535-1.216s-2.025.54-2.535 1.215"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRainbowCloudOutline;
