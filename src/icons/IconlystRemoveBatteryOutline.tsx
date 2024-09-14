import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveBatteryOutline = ({
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
      d="M17.413 6.504a.75.75 0 0 1 1.05-.146c.77.58 1.3 1.408 1.546 2.435.115.453.174.956.174 1.476v3.348c0 .489-.05.962-.156 1.4-.255 1.076-.826 1.942-1.671 2.53-.837.58-1.888.852-3.054.852H7.985a6 6 0 0 1-.728-.042.75.75 0 0 1 .195-1.488c.164.022.337.03.533.03h7.317c.94 0 1.671-.219 2.198-.585.517-.36.89-.896 1.068-1.646l.001-.005c.074-.302.114-.654.114-1.046V10.27c0-.413-.047-.791-.13-1.11l-.003-.013c-.17-.717-.52-1.236-.99-1.591a.75.75 0 0 1-.147-1.051"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.525 8.97a.75.75 0 0 1 .75-.75h.8c.796 0 1.497.234 1.97.821.444.553.574 1.286.574 2.03v1.707c0 .734-.13 1.46-.579 2.005-.474.579-1.174.805-1.965.805h-.792a.75.75 0 0 1 0-1.5h.792c.512 0 .709-.138.806-.256.123-.15.238-.455.238-1.054V11.07c0-.613-.116-.93-.243-1.088-.099-.123-.295-.261-.8-.261h-.8a.75.75 0 0 1-.75-.75M5.496 7.745c-.53.51-.875 1.304-.875 2.462v3.41c0 .763.145 1.362.395 1.82a.75.75 0 1 1-1.317.718c-.398-.73-.578-1.59-.578-2.538v-3.41c0-1.462.443-2.688 1.337-3.545.889-.852 2.126-1.247 3.536-1.247h5.985a.75.75 0 0 1 0 1.5H7.994c-1.138 0-1.962.316-2.498.83M20.949 4.016a.75.75 0 0 1 0 1.06L6.042 19.984a.75.75 0 0 1-1.06-1.06L19.887 4.016a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRemoveBatteryOutline;
