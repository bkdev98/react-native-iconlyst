import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbells1TwoTone = ({
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
      d="M10.834 16.081a.46.46 0 0 1-.466-.393c-.048-.357-.199-.857-.67-1.168-.627-.417-2.944-.328-3.454.011-.36.217-.738.63-.717 2.758.023 2.128.41 2.532.774 2.742.517.33 2.834.37 3.454-.059.464-.321.604-.824.645-1.182a.46.46 0 0 1 .457-.402l5.336-.055a.46.46 0 0 1 .465.393c.048.357.199.857.669 1.168.628.417 2.944.328 3.455-.011.36-.217.738-.629.717-2.758s-.41-2.532-.774-2.742c-.517-.33-2.834-.37-3.454.059-.464.32-.604.824-.645 1.182a.46.46 0 0 1-.457.402z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.048 6.04a.46.46 0 0 1-.401-.458c.006-.36-.067-.877-.485-1.256-.558-.506-2.86-.77-3.417-.511-.388.16-.825.51-1.125 2.617s.021 2.566.35 2.828c.461.404 2.745.794 3.423.463.507-.247.722-.723.816-1.07a.46.46 0 0 1 .513-.329l5.282.753a.46.46 0 0 1 .4.46c-.005.36.069.876.486 1.256.557.506 2.86.77 3.416.51.39-.16.826-.51 1.126-2.617s-.022-2.565-.35-2.827c-.46-.405-2.745-.795-3.422-.465-.507.248-.722.723-.818 1.071a.46.46 0 0 1-.512.328z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDumbbells1TwoTone;
