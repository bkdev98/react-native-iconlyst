import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaLightningTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.153 10.107a8.29 8.29 0 0 1 5.358 7.752c-1.678.03-2.531.226-3.78 1.14-3.562-1.355-5.456-1.38-9.013 0-1.163-.813-2.03-1.061-3.773-1.14a8.28 8.28 0 0 1 4.492-7.366"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.229 17.99V21M19.25 8.701l1.26-1.907h-2.201l1.24-1.85M4.887 8.701l1.26-1.907H3.944l1.241-1.85M9.088 7.23l1.682-4.105a.26.26 0 0 1 .245-.171h2.256c.18 0 .306.178.246.348l-.997 2.341c-.06.17.066.349.246.349h2.13c.225 0 .345.264.197.433l-4.044 4.616c-.182.208-.52.028-.45-.24l.772-2.89a.26.26 0 0 0-.253-.33H9.333a.26.26 0 0 1-.245-.35"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUmbrellaLightningTwoTone;
