import {
  AlignItemsProps,
  BorderProps,
  BorderRadiusProps,
  BordersProps,
  BoxShadowProps,
  ColorProps,
  DisplayProps,
  FlexBasisProps,
  FlexDirectionProps,
  FlexProps,
  FlexWrapProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  HeightProps,
  JustifyContentProps,
  MaxHeightProps,
  MaxWidthProps,
  MinWidthProps,
  PositionProps,
  SpaceProps,
  TextAlignProps,
  WidthProps,
  MinHeightProps,
  LineHeightProps
} from 'styled-system'

export type StyledSystemProps = AlignItemsProps &
  BorderProps &
  BorderRadiusProps &
  BordersProps &
  BoxShadowProps &
  ColorProps &
  DisplayProps &
  FlexBasisProps &
  FlexDirectionProps &
  FlexProps &
  FlexWrapProps &
  FontFamilyProps &
  FontSizeProps &
  FontWeightProps &
  HeightProps &
  JustifyContentProps &
  MaxHeightProps &
  MaxWidthProps &
  MaxWidthProps &
  MinWidthProps &
  PositionProps &
  SpaceProps &
  MinHeightProps &
  TextAlignProps &
  LineHeightProps &
  WidthProps & {
    color?: string
  }
