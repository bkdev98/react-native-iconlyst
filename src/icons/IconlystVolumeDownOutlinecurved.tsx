import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeDownOutlinecurved = ({
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
      d="M9.563 17.903c.805.617 1.907 1.46 3.163 1.46.482 0 .986-.123 1.505-.432 1.417-1.006 1.919-2.818 1.919-6.925 0-4.16-.484-5.907-1.97-6.96-1.821-1.076-3.503.21-4.616 1.063l-.002.002c-.422.323-.857.657-1.143.75-.421.14-.792.183-1.152.226h-.005c-.691.083-1.405.168-2.202.845-1.279 1.086-1.275 2.812-1.271 4.074-.004 1.26-.008 2.986 1.271 4.074.797.678 1.512.763 2.203.845.361.043.734.088 1.155.225.284.094.714.423 1.132.743zM10.476 7.3c.898-.688 1.601-1.176 2.246-1.176.219 0 .431.056.641.18.795.564 1.287 1.715 1.287 5.702s-.492 5.138-1.236 5.669c-.882.52-1.736-.04-2.939-.963l-.002-.002c-.543-.416-1.058-.81-1.586-.984-.564-.185-1.033-.242-1.447-.29h-.003c-.594-.072-.954-.116-1.406-.5-.748-.635-.745-1.851-.742-2.926v-.009c-.003-1.074-.006-2.29.742-2.926.452-.384.812-.427 1.408-.497l.018-.002c.41-.05.874-.106 1.431-.29.528-.174 1.043-.568 1.588-.986"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M18.165 16.315a.75.75 0 0 0 1.02-.293c1.369-2.472 1.369-5.55 0-8.031a.75.75 0 1 0-1.313.725 6.85 6.85 0 0 1 0 6.58.75.75 0 0 0 .293 1.019"
    />
  </Svg>
);
export default IconlystVolumeDownOutlinecurved;
