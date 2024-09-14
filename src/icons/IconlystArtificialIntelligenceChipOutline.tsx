import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceChipOutline = ({
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
      d="M9.54 2.306a.75.75 0 0 0-.694.066L4.675 5.101a.75.75 0 0 0-.34.628v2.545l-1.678.863a.75.75 0 0 0-.407.667v4.393a.75.75 0 0 0 .407.667l1.678.862v2.542a.75.75 0 0 0 .34.627l4.17 2.732a.75.75 0 0 0 .696.067l2.744-1.125a.75.75 0 0 0-.57-1.388l-2.378.975-3.502-2.293v-2.595a.75.75 0 0 0-.407-.667l-1.678-.862V10.26L5.428 9.4a.75.75 0 0 0 .407-.667V6.134l3.502-2.29 2.38.97a.75.75 0 1 0 .566-1.388z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.46 21.694a.75.75 0 0 0 .694-.066l4.171-2.729a.75.75 0 0 0 .34-.628v-2.545l1.678-.863a.75.75 0 0 0 .407-.667V9.803a.75.75 0 0 0-.407-.667l-1.678-.862V5.732a.75.75 0 0 0-.34-.627l-4.17-2.732a.75.75 0 0 0-.696-.067l-2.743 1.125a.75.75 0 0 0-.466.694v4.459a.75.75 0 0 0 1.5 0V4.628l1.913-.784 3.502 2.293v2.595a.75.75 0 0 0 .407.667l1.678.862v3.478l-1.678.862a.75.75 0 0 0-.407.667v2.598l-3.502 2.29-1.913-.78v-3.962a.75.75 0 0 0-1.5 0v4.466c0 .305.184.579.466.694z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.58 8.67c.464-.498 1.115-.762 1.846-.762h3.133c.732 0 1.383.264 1.847.762.458.492.679 1.153.679 1.855v2.951c0 .702-.22 1.362-.679 1.854-.464.499-1.115.763-1.848.763h-3.132c-.732 0-1.383-.264-1.847-.763-.458-.492-.679-1.152-.679-1.854v-2.951c0-.703.222-1.363.68-1.855m1.098 1.023c-.157.168-.278.44-.278.832v2.951c0 .392.12.665.277.832.15.162.387.284.75.284h3.131c.363 0 .6-.122.75-.284.156-.167.277-.44.277-.832v-2.951c0-.392-.12-.665-.277-.833-.15-.161-.387-.284-.75-.284h-3.132c-.36 0-.597.123-.748.285"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.6 10.53a.75.75 0 0 1 .75-.75h1.176a.75.75 0 0 1 0 1.5H15.35a.75.75 0 0 1-.75-.75M14.6 13.57a.75.75 0 0 1 .75-.75h1.176a.75.75 0 0 1 0 1.5H15.35a.75.75 0 0 1-.75-.75M6.725 10.53a.75.75 0 0 1 .75-.75H8.65a.75.75 0 0 1 0 1.5H7.475a.75.75 0 0 1-.75-.75M6.725 13.57a.75.75 0 0 1 .75-.75H8.65a.75.75 0 0 1 0 1.5H7.475a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceChipOutline;
