import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike2TwoTone = ({
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
      d="M16.839 14.065c-1.177 0-3.236 3.759-4.105 5.454-.155.302-.232.454-.351.57-.102.1-.252.19-.388.235-.158.053-.296.052-.573.05a3 3 0 0 1-.562-.043c-1.304-.268-2.32-1.851-1.005-5.937.047-.147.07-.22.057-.277a.2.2 0 0 0-.09-.123c-.05-.03-.125-.03-.276-.03H8.49c-1.982 0-2.973 0-3.647-.406a2.84 2.84 0 0 1-1.267-1.654c-.216-.757.042-1.713.558-3.627l.482-1.785c.273-1.014.41-1.52.697-1.898a2.43 2.43 0 0 1 1.022-.784c.44-.178.965-.178 2.014-.178h4.27c.342 0 .512 0 .68.023q.231.033.454.109c.16.055.312.132.617.287l2.468 1.253"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.094 15.281h.15c.781 0 1.172 0 1.471-.15.275-.137.498-.36.635-.634.15-.3.15-.69.15-1.472V5.883c0-.78 0-1.171-.15-1.47a1.4 1.4 0 0 0-.635-.636c-.299-.15-.69-.15-1.47-.15h-.15c-.782 0-1.172 0-1.472.15-.275.138-.498.36-.635.635-.15.3-.15.69-.15 1.471v7.142c0 .782 0 1.172.15 1.472.137.274.36.497.635.635.3.15.69.15 1.471.15"
    />
  </Svg>
);
export default IconlystThumbDislike2TwoTone;
